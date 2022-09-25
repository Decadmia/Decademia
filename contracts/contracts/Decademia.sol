// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4 <0.9.0;

import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

interface IPUSHCommInterface {
    function sendNotification(address _channel, address _recipient, bytes memory _identity) external;
}

contract Decademia {

using SafeERC20 for IERC20;

struct Project {
    string ipfsCid;
    address[] investors;
    uint256[] investedAmounts;
    uint256 withdrawnAmount;
}

modifier notPaused {
      require(contractPaused == false, "Contract is Paused");
      _;
   }

modifier onlyProjectOwner {
    require(projectOwnerToProjectIDs[msg.sender].length > 0, "Not a Project Owner");
    _;
    }

modifier onlyOwner {
      require(msg.sender == owner, "Only Owner");
      _;
    }

address public owner;
uint256 public projectNum;
bool public contractPaused;
address public EPNS_COMM_ADDRESS = 0xb3971BCef2D791bc4027BbfedFb47319A4AAaaAa;
address public USDT_CONTRACT_ADDRESS = 0xA02f6adc7926efeBBd59Fd43A84f4E0c0c91e832;

constructor() {
    owner = msg.sender;
    projectNum = 0;
    contractPaused = false;
}

mapping(address => uint256[]) public projectOwnerToProjectIDs;

mapping(uint256 => Project) public projectIDtoProject;

mapping(address => uint256[]) public investorIDtoInvestedProjects;

    function addProject(string memory ipfsCid) external notPaused {
        require(!StringCompare(ipfsCid,""), "IPFS CID cannot be blank");

        projectIDtoProject[projectNum] = Project(ipfsCid, new address[](0), new uint256[](0), 0);
        projectOwnerToProjectIDs[msg.sender].push(projectNum);
        projectNum++;

        // epns project created
    }

    function investInProject(uint256 projectID, uint256 amount) external notPaused {
        require(projectID < projectNum, "projectID doesn't exist");
        require(IERC20(USDT_CONTRACT_ADDRESS).balanceOf(msg.sender) > amount, "Insufficient Balance");
        projectIDtoProject[projectID].investors.push(msg.sender);
        projectIDtoProject[projectID].investedAmounts.push(amount);
        investorIDtoInvestedProjects[msg.sender].push(projectID);
        IERC20(USDT_CONTRACT_ADDRESS).safeTransferFrom(msg.sender, address(this), amount);

        // epns invested in project
    }

    function viewProject(uint256 projectID) external view returns(Project memory) {
        require(projectID < projectNum, "projectID doesn't exist");
        return projectIDtoProject[projectID];
    }

    function viewInvestorProjectIDs(address investor) external view returns(uint256[] memory) {
        return investorIDtoInvestedProjects[investor];
    }

    function viewProjectOwnerProjectIDs(address projectOwner) external view returns(uint256[] memory) {
        return projectOwnerToProjectIDs[projectOwner];
    }


    function StringCompare(string memory a, string memory b) internal pure returns(bool) {
        return keccak256(abi.encodePacked(a)) == keccak256(abi.encodePacked(b));
    }

    function withdrawFunds() external onlyProjectOwner notPaused {
        uint256 amount = 0;
        for(uint256 i = 0; i<projectOwnerToProjectIDs[msg.sender].length; i++) {
            uint256 withdrawAmountInProject = 0;
            for(uint256 j = 0; j<projectIDtoProject[projectOwnerToProjectIDs[msg.sender][i]].investedAmounts.length; j++) {
                withdrawAmountInProject += projectIDtoProject[projectOwnerToProjectIDs[msg.sender][i]].investedAmounts[j];
            }
            amount += withdrawAmountInProject - projectIDtoProject[projectOwnerToProjectIDs[msg.sender][i]].withdrawnAmount;
            projectIDtoProject[projectOwnerToProjectIDs[msg.sender][i]].withdrawnAmount += withdrawAmountInProject - projectIDtoProject[projectOwnerToProjectIDs[msg.sender][i]].withdrawnAmount;
        }
        IERC20(USDT_CONTRACT_ADDRESS).safeTransfer(msg.sender, amount);

    }

    function togglePause() external onlyOwner {
        contractPaused = !contractPaused;
    }

    receive() external payable {}

}