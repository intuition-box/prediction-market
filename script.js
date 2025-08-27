// Contract Configuration
const HOUSE_ADDRESS = "0xB6694a172888c067694ed44a5076C3EF8C975f5d";
const TINU_TOKEN_ADDRESS = "0x4Fd49D82fF5C24669C4Ed154Bd3946bc5AEE8093";
const PREDICTION_HOUSE_ADDRESS = "0x90ad70db62De4B141b7a196bbC68e51a9F18D1C2";

// Contract ABIs
const TINU_TOKEN_ABI = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_to",
                "type": "address"
            }
        ],
        "name": "claimTokens",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "allowance",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "needed",
                "type": "uint256"
            }
        ],
        "name": "ERC20InsufficientAllowance",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "balance",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "needed",
                "type": "uint256"
            }
        ],
        "name": "ERC20InsufficientBalance",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "approver",
                "type": "address"
            }
        ],
        "name": "ERC20InvalidApprover",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "receiver",
                "type": "address"
            }
        ],
        "name": "ERC20InvalidReceiver",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "sender",
                "type": "address"
            }
        ],
        "name": "ERC20InvalidSender",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            }
        ],
        "name": "ERC20InvalidSpender",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_amount",
                "type": "uint256"
            }
        ],
        "name": "mint",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "OwnableInvalidOwner",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "OwnableUnauthorizedAccount",
        "type": "error"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            }
        ],
        "name": "allowance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "CLAIM_AMOUNT",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "CLAIM_COOLDOWN",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "decimals",
        "outputs": [
            {
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "lastClaimTime",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];

const PREDICTION_HOUSE_ABI = [
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_predictionId",
                "type": "uint256"
            }
        ],
        "name": "claimWinnings",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_tinuToken",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "OwnableInvalidOwner",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "OwnableUnauthorizedAccount",
        "type": "error"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "predictionId",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bool",
                "name": "choice",
                "type": "bool"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "BetPlaced",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_text",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "_endTimeDays",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_endTimeHours",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_yesOdds",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_noOdds",
                "type": "uint256"
            }
        ],
        "name": "createPrediction",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_amount",
                "type": "uint256"
            }
        ],
        "name": "emergencyWithdrawTinu",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_predictionId",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "_choice",
                "type": "bool"
            },
            {
                "internalType": "uint256",
                "name": "_amount",
                "type": "uint256"
            }
        ],
        "name": "placeBet",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "text",
                "type": "string"
            }
        ],
        "name": "PredictionCreated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "bool",
                "name": "outcome",
                "type": "bool"
            }
        ],
        "name": "PredictionResolved",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_predictionId",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "_outcome",
                "type": "bool"
            }
        ],
        "name": "resolvePrediction",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "predictionId",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "WinningsClaimed",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_predictionId",
                "type": "uint256"
            }
        ],
        "name": "getPrediction",
        "outputs": [
            {
                "internalType": "string",
                "name": "text",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "endTime",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "resolved",
                "type": "bool"
            },
            {
                "internalType": "bool",
                "name": "outcome",
                "type": "bool"
            },
            {
                "internalType": "uint256",
                "name": "yesBets",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "noBets",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "yesOdds",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "noOdds",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getPredictionCount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_predictionId",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "_user",
                "type": "address"
            }
        ],
        "name": "getUserBet",
        "outputs": [
            {
                "internalType": "bool",
                "name": "choice",
                "type": "bool"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "claimed",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "predictionCount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "predictions",
        "outputs": [
            {
                "internalType": "string",
                "name": "text",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "endTime",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "resolved",
                "type": "bool"
            },
            {
                "internalType": "bool",
                "name": "outcome",
                "type": "bool"
            },
            {
                "internalType": "uint256",
                "name": "yesBets",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "noBets",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "yesOdds",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "noOdds",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "tinuToken",
        "outputs": [
            {
                "internalType": "contract IERC20",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "userBets",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "userChoices",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "userClaimed",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];

// Global Variables
let web3;
let userAddress;
let tinuToken;
let predictionHouse;
let hiddenPredictions = [];

// Initialize Web3
async function initializeWeb3() {
    if (typeof window.ethereum !== 'undefined') {
        web3 = new Web3(window.ethereum);
        try {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            return true;
        } catch (error) {
            console.error('User denied account access');
            return false;
        }
    } else {
        alert('Please install MetaMask!');
        return false;
    }
}

// Connect Wallet
async function connectWallet() {
    try {
        showLoading();

        if (!await initializeWeb3()) {
            hideLoading();
            return;
        }

        const accounts = await web3.eth.getAccounts();
        userAddress = accounts[0];

        if (!userAddress) {
            alert('No accounts found!');
            hideLoading();
            return;
        }

        // Initialize contracts
        tinuToken = new web3.eth.Contract(TINU_TOKEN_ABI, TINU_TOKEN_ADDRESS);
        predictionHouse = new web3.eth.Contract(PREDICTION_HOUSE_ABI, PREDICTION_HOUSE_ADDRESS);

        // Update UI
        document.getElementById('wallet').innerText = `Connected: ${userAddress.slice(0, 6)}...${userAddress.slice(-4)}`;

        // Show/hide dashboards based on user role
        const isHouse = userAddress.toLowerCase() === HOUSE_ADDRESS.toLowerCase();
        document.getElementById('houseDashboard').style.display = isHouse ? 'block' : 'none';
        document.getElementById('userDashboard').style.display = isHouse ? 'none' : 'block';

        // Load data
        await loadTinuBalance();
        await loadFaucetStatus();
        await loadPredictions();
        if (!isHouse) {
            await loadUserDashboard();
            await loadAvailablePredictions();
        } else {
            await loadHouseDashboard();
        }

        showToast('✅ Wallet connected successfully!', 'success');

    } catch (error) {
        console.error('Connection error:', error);
        showToast(`❌ Connection failed: ${error.message}`, 'error');
    } finally {
        hideLoading();
    }
}

// Load Tinu Balance
async function loadTinuBalance() {
    try {
        if (!userAddress || !tinuToken) return;

        const balance = await tinuToken.methods.balanceOf(userAddress).call();
        const tinuBalance = Number(balance) / 1e18;

        document.getElementById('tinuBalance').textContent = tinuBalance.toFixed(0);
        console.log(`💰 Tinu Balance loaded: ${tinuBalance} Tinu`);

    } catch (error) {
        console.error('Error loading Tinu balance:', error);
    }
}

// Load Faucet Status
async function loadFaucetStatus() {
    try {
        if (!userAddress || !tinuToken) return;

        const lastClaim = await tinuToken.methods.lastClaimTime(userAddress).call();
        const lastClaimTime = Number(lastClaim) * 1000;
        const now = Date.now();
        const timeUntilNext = Math.max(0, lastClaimTime + (24 * 60 * 60 * 1000) - now);

        const faucetBtn = document.getElementById('faucetBtn');
        const faucetStatus = document.getElementById('faucetStatus');

        if (timeUntilNext > 0) {
            const hours = Math.floor(timeUntilNext / (1000 * 60 * 60));
            const minutes = Math.floor((timeUntilNext % (1000 * 60 * 60)) / (1000 * 60));
            faucetStatus.textContent = `⏳ Faucet cooldown: ${hours}h ${minutes}m remaining`;
            faucetBtn.disabled = true;
            faucetBtn.textContent = '⏳ Cooldown Active';
        } else {
            faucetStatus.textContent = '🚰 Faucet ready to use';
            faucetBtn.disabled = false;
            faucetBtn.textContent = '🚰 Request Tinu';
        }

    } catch (error) {
        console.error('Error loading faucet status:', error);
    }
}

// Request Tinu from Faucet
async function requestTinu() {
    try {
        showLoading();

        await tinuToken.methods.claimTokens(userAddress).send({ from: userAddress });

        showToast('✅ 1000 Tinu claimed successfully!', 'success');

        await loadTinuBalance();
        await loadFaucetStatus();

    } catch (error) {
        console.error('Error claiming Tinu:', error);
        showToast(`❌ Claim failed: ${error.message}`, 'error');
    } finally {
        hideLoading();
    }
}

// Create Prediction (House Only)
async function createPrediction() {
    try {
        showLoading();

        const text = document.getElementById('predictionText').value.trim();
        const days = parseInt(document.getElementById('endTimeDays').value);
        const hours = parseInt(document.getElementById('endTimeHours').value);
        const yesOdds = parseInt(document.getElementById('yesOdds').value);
        const noOdds = parseInt(document.getElementById('noOdds').value);

        if (!text) {
            alert('Please enter prediction text!');
            hideLoading();
            return;
        }

        if (days > 30 || hours > 23) {
            alert('Invalid time: Max 30 days and 23 hours!');
            hideLoading();
            return;
        }

        console.log('📝 CREATING PREDICTION...');
        console.log(`Text: ${text}`);
        console.log(`Days: ${days}, Hours: ${hours}`);
        console.log(`Odds: Yes=${yesOdds}, No=${noOdds}`);

        await predictionHouse.methods.createPrediction(text, days, hours, yesOdds, noOdds).send({ from: userAddress });

        showToast('✅ Prediction created successfully!', 'success');

        // Clear form
        document.getElementById('predictionText').value = '';
        document.getElementById('endTimeDays').value = '1';
        document.getElementById('endTimeHours').value = '0';
        document.getElementById('yesOdds').value = '200';
        document.getElementById('noOdds').value = '180';

        await forceRefreshAll();

    } catch (error) {
        console.error('❌ Error creating prediction:', error);
        showToast(`❌ Creation failed: ${error.message}`, 'error');
    } finally {
        hideLoading();
    }
}

// Load Predictions
async function loadPredictions() {
    try {
        console.log('🔄 Loading predictions...');

        const count = await predictionHouse.methods.getPredictionCount().call();
        console.log(`📊 Found ${count} predictions in contract`);

        const tableBody = document.querySelector('#predictionTable tbody');
        if (!tableBody) {
            console.error('❌ Table body not found!');
            return;
        }

        tableBody.innerHTML = '';

        for (let i = 0; i < count; i++) {
            if (hiddenPredictions.includes(i)) continue;

            try {
                const prediction = await predictionHouse.methods.getPrediction(i).call();
                const userBet = userAddress ? await predictionHouse.methods.getUserBet(i, userAddress).call() : { amount: '0', choice: false, claimed: false };

                const endTime = new Date(Number(prediction.endTime) * 1000);
                const now = new Date();
                const isExpired = now > endTime;
                const isActive = !prediction.resolved && !isExpired;

                const yesOdds = Number(prediction.yesOdds) / 100;
                const noOdds = Number(prediction.noOdds) / 100;
                const yesBets = Number(prediction.yesBets) / 1e18;
                const noBets = Number(prediction.noBets) / 1e18;

                const status = prediction.resolved ? 'Resolved' : isExpired ? 'Expired' : 'Active';
                const actionButton = getActionButton(i, prediction, userBet, isActive);

                const row = `
                    <tr>
                        <td>${i}</td>
                        <td>${prediction.text}</td>
                        <td>${endTime.toLocaleString()}</td>
                        <td>${yesOdds}x</td>
                        <td>${noOdds}x</td>
                        <td>${yesBets.toFixed(0)}</td>
                        <td>${noBets.toFixed(0)}</td>
                        <td>${status}</td>
                        <td>${actionButton}</td>
                    </tr>
                `;

                tableBody.innerHTML += row;
                console.log(`✅ Added prediction ${i}: "${prediction.text}"`);
            } catch (predictionError) {
                console.error(`❌ Error loading prediction ${i}:`, predictionError);
            }
        }

        console.log('✅ Predictions loaded successfully!');

    } catch (error) {
        console.error('❌ Error loading predictions:', error);
        showToast(`❌ Failed to load predictions: ${error.message}`, 'error');
    }
}

// Get Action Button
function getActionButton(predictionId, prediction, userBet, isActive) {
    const hasBet = userBet.amount !== '0';
    const isHouse = userAddress.toLowerCase() === HOUSE_ADDRESS.toLowerCase();

    if (isHouse && !prediction.resolved && isActive) {
        return `<button onclick="showResolveModal(${predictionId})" class="resolve-btn">Resolve</button>`;
    } else if (prediction.resolved && hasBet && !userBet.claimed && userBet.choice === prediction.outcome) {
        return `<button onclick="claimWinnings(${predictionId})" class="claim-btn">Claim</button>`;
    } else if (isActive && !hasBet && !isHouse) {
        return `<button onclick="showBetModal(${predictionId})" class="bet-btn"> Bet</button>`;
    } else if (hasBet) {
        const choice = userBet.choice ? 'Yes' : 'No';
        return `<span class="bet-status">Bet: ${choice}</span>`;
    } else if (!isActive) {
        return `<button onclick="hidePrediction(${predictionId})" class="hide-btn">Hide</button>`;
    } else if (isHouse && isActive) {
        return `<span class="house-prediction">House Prediction</span>`;
    } else {
        return `<span class="no-action">-</span>`;
    }
}

// Quick Place Bet Function
async function quickPlaceBet() {
    try {
        showLoading();

        const predictionId = document.getElementById('quickPredictionId').value;
        const choice = document.getElementById('quickBetChoice').value === 'true';
        const amount = Number(document.getElementById('quickBetAmount').value);

        console.log(`🎯 Quick bet: Prediction ${predictionId}, Choice: ${choice}, Amount: ${amount} Tinu`);

        if (!predictionId || amount <= 0 || amount > 1000) {
            showToast('Invalid bet amount. Must be between 1-1000 Tinu.', 'error');
            hideLoading();
            return;
        }

        const amountWei = (amount * 1e18).toString();

        console.log('📝 Approving Tinu transfer...');
        await tinuToken.methods.approve(predictionHouse.options.address, amountWei).send({ from: userAddress });

        console.log(' Placing quick bet...');
        await predictionHouse.methods.placeBet(predictionId, choice, amountWei).send({ from: userAddress });

        showToast('✅ Quick bet placed successfully!', 'success');

        // Clear form
        document.getElementById('quickPredictionId').value = '';
        document.getElementById('quickBetAmount').value = '';

        await forceRefreshAll();

    } catch (error) {
        console.error('❌ Error placing quick bet:', error);
        showToast(`❌ Quick bet failed: ${error.message}`, 'error');
    } finally {
        hideLoading();
    }
}

// Load Available Predictions for Players
async function loadAvailablePredictions() {
    try {
        console.log('🔄 Loading available predictions for players...');

        if (!userAddress) {
            console.log('❌ No user address found');
            return;
        }

        const container = document.getElementById('availablePredictionsList');
        if (!container) {
            console.error('❌ Available predictions container not found!');
            return;
        }

        container.innerHTML = '';

        const count = await predictionHouse.methods.getPredictionCount().call();
        console.log(`📊 Total predictions in contract: ${count}`);

        let availableCount = 0;

        for (let i = 0; i < count; i++) {
            try {
                const prediction = await predictionHouse.methods.getPrediction(i).call();
                const userBet = await predictionHouse.methods.getUserBet(i, userAddress).call();

                const endTime = new Date(Number(prediction.endTime) * 1000);
                const now = new Date();
                const isExpired = now > endTime;
                const isActive = !prediction.resolved && !isExpired;
                const hasBet = userBet.amount !== '0';

                if (isActive && !hasBet) {
                    const yesOdds = Number(prediction.yesOdds) / 100;
                    const noOdds = Number(prediction.noOdds) / 100;

                    const predictionCard = `
                        <div class="prediction-card">
                            <h4>Prediction #${i}</h4>
                            <p class="prediction-text">${prediction.text}</p>
                            <div class="odds-info">
                                <span class="odds yes">Yes: ${yesOdds}x</span>
                                <span class="odds no">No: ${noOdds}x</span>
                            </div>
                            <p class="end-time">Ends: ${endTime.toLocaleString()}</p>
                            <button onclick="showBetModal(${i})" class="bet-btn">🎲 Place Bet</button>
                        </div>
                    `;
                    container.innerHTML += predictionCard;
                    availableCount++;
                }

            } catch (predictionError) {
                console.error(`❌ Error analyzing prediction ${i}:`, predictionError);
            }
        }

        console.log(`✅ Available predictions loaded: ${availableCount} predictions available`);

        if (availableCount === 0) {
            container.innerHTML = '<p style="text-align: center; color: #666; padding: 20px;">No active predictions available for betting</p>';
        }

    } catch (error) {
        console.error('❌ Error loading available predictions:', error);
        const container = document.getElementById('availablePredictionsList');
        if (container) {
            container.innerHTML = '<p style="text-align: center; color: red; padding: 20px;">Error loading predictions</p>';
        }
    }
}

// Bet Modal Functions
function showBetModal(predictionId) {
    console.log(`🎲 Opening bet modal for prediction ${predictionId}`);

    try {
        predictionHouse.methods.getPrediction(predictionId).call()
            .then(async (prediction) => {
                document.getElementById('betPredictionText').textContent = prediction.text;
                document.getElementById('betYesOdds').textContent = `${Number(prediction.yesOdds) / 100}x`;
                document.getElementById('betNoOdds').textContent = `${Number(prediction.noOdds) / 100}x`;

                const balance = await tinuToken.methods.balanceOf(userAddress).call();
                const tinuBalance = Number(balance) / 1e18;
                document.getElementById('betTinuBalance').textContent = `${tinuBalance} Tinu`;

                document.getElementById('betModal').setAttribute('data-prediction-id', predictionId);
                document.getElementById('betModal').style.display = 'block';

                calculatePotentialWinnings();
            })
            .catch(error => {
                console.error('Error loading prediction details:', error);
                showToast('Error loading prediction details', 'error');
            });
    } catch (error) {
        console.error('Error showing bet modal:', error);
        showToast('Error opening bet modal', 'error');
    }
}

function closeBetModal() {
    document.getElementById('betModal').style.display = 'none';
}

function calculatePotentialWinnings() {
    const choice = document.getElementById('betChoice').value === 'true';
    const amount = Number(document.getElementById('betAmount').value);

    if (amount <= 0) {
        document.getElementById('potentialWinnings').textContent = '0';
        return;
    }

    const yesOddsText = document.getElementById('betYesOdds').textContent;
    const noOddsText = document.getElementById('betNoOdds').textContent;

    const yesOdds = Number(yesOddsText.replace('x', ''));
    const noOdds = Number(noOddsText.replace('x', ''));

    const odds = choice ? yesOdds : noOdds;
    const potentialWinnings = amount * odds;

    document.getElementById('potentialWinnings').textContent = potentialWinnings.toFixed(2);
}

async function placeBet() {
    try {
        showLoading();

        const predictionId = document.getElementById('betModal').getAttribute('data-prediction-id');
        const choice = document.getElementById('betChoice').value === 'true';
        const amount = Number(document.getElementById('betAmount').value);

        console.log(`🎯 Placing bet: Prediction ${predictionId}, Choice: ${choice}, Amount: ${amount} Tinu`);

        if (!predictionId || amount <= 0 || amount > 1000) {
            showToast('Invalid bet amount. Must be between 1-1000 Tinu.', 'error');
            hideLoading();
            return;
        }

        const amountWei = (amount * 1e18).toString();

        console.log('📝 Approving Tinu transfer...');
        await tinuToken.methods.approve(predictionHouse.options.address, amountWei).send({ from: userAddress });

        console.log(' Placing bet...');
        await predictionHouse.methods.placeBet(predictionId, choice, amountWei).send({ from: userAddress });

        showToast('✅ Bet placed successfully!', 'success');
        closeBetModal();

        await forceRefreshAll();

    } catch (error) {
        console.error('❌ Error placing bet:', error);
        showToast(`❌ Bet failed: ${error.message}`, 'error');
    } finally {
        hideLoading();
    }
}

// Resolve Modal Functions
function showResolveModal(predictionId) {
    predictionHouse.methods.getPrediction(predictionId).call()
        .then((prediction) => {
            document.getElementById('resolvePredictionText').textContent = prediction.text;
            document.getElementById('resolveModal').setAttribute('data-prediction-id', predictionId);
            document.getElementById('resolveModal').style.display = 'block';
        })
        .catch(error => {
            console.error('Error loading prediction details:', error);
            showToast('Error loading prediction details', 'error');
        });
}

function closeResolveModal() {
    document.getElementById('resolveModal').style.display = 'none';
}

async function resolvePrediction() {
    try {
        showLoading();

        const predictionId = document.getElementById('resolveModal').getAttribute('data-prediction-id');
        const outcome = document.getElementById('resolveOutcome').value === 'true';

        console.log(`⚖️ Resolving prediction ${predictionId} with outcome: ${outcome}`);

        await predictionHouse.methods.resolvePrediction(predictionId, outcome).send({ from: userAddress });

        showToast('✅ Prediction resolved successfully!', 'success');
        closeResolveModal();

        await forceRefreshAll();

    } catch (error) {
        console.error('❌ Error resolving prediction:', error);
        showToast(`❌ Resolution failed: ${error.message}`, 'error');
    } finally {
        hideLoading();
    }
}

// Claim Winnings
async function claimWinnings(predictionId) {
    try {
        showLoading();

        console.log(`💰 Claiming winnings for prediction ${predictionId}`);

        await predictionHouse.methods.claimWinnings(predictionId).send({ from: userAddress });

        showToast('✅ Winnings claimed successfully!', 'success');

        await forceRefreshAll();

        } catch (error) {
        console.error('❌ Error claiming winnings:', error);
        showToast(`❌ Claim failed: ${error.message}`, 'error');
        } finally {
        hideLoading();
        }
        }

        // Hide Prediction
        function hidePrediction(predictionId) {
        hiddenPredictions.push(predictionId);
        localStorage.setItem('hiddenPredictions', JSON.stringify(hiddenPredictions));
        loadPredictions();
        showToast('✅ Prediction hidden', 'info');
        }

        // Load User Dashboard
        async function loadUserDashboard() {
        try {
        if (!userAddress) return;

        let activeBets = 0;
        let totalWinnings = 0;

        const count = await predictionHouse.methods.getPredictionCount().call();

        for (let i = 0; i < count; i++) {
            const userBet = await predictionHouse.methods.getUserBet(i, userAddress).call();
            const prediction = await predictionHouse.methods.getPrediction(i).call();

            if (userBet.amount !== '0') {
                if (!prediction.resolved) {
                    activeBets++;
                } else if (userBet.choice === prediction.outcome && !userBet.claimed) {
                    const odds = userBet.choice ? Number(prediction.yesOdds) : Number(prediction.noOdds);
                    const winnings = (Number(userBet.amount) * odds) / 100 / 1e18;
                    totalWinnings += winnings;
                }
            }
        }

        document.getElementById('activeBets').textContent = activeBets;
        document.getElementById('totalWinnings').textContent = totalWinnings.toFixed(2);

        } catch (error) {
        console.error('Error loading user dashboard:', error);
        }
        }

        // Load House Dashboard
        async function loadHouseDashboard() {
        try {
        const count = await predictionHouse.methods.getPredictionCount().call();
        let totalVolume = 0;

        for (let i = 0; i < count; i++) {
            const prediction = await predictionHouse.methods.getPrediction(i).call();
            totalVolume += (Number(prediction.yesBets) + Number(prediction.noBets)) / 1e18;
        }

        document.getElementById('totalPredictions').textContent = count;
        document.getElementById('totalVolume').textContent = totalVolume.toFixed(0);

        } catch (error) {
        console.error('Error loading house dashboard:', error);
        }
        }

        // Force refresh all dashboards
        async function forceRefreshAll() {
        console.log('   FORCING REFRESH OF ALL DASHBOARDS...');

        try {
        await loadPredictions();
        await loadTinuBalance();

        const isHouse = userAddress.toLowerCase() === HOUSE_ADDRESS.toLowerCase();
        if (isHouse) {
            await loadHouseDashboard();
        } else {
            await loadUserDashboard();
            await loadAvailablePredictions();
        }

        console.log('✅ All dashboards refreshed!');
        } catch (error) {
        console.error('❌ Refresh failed:', error);
        }
        }

        // Utility Functions
        function showLoading() {
        document.getElementById('loadingOverlay').style.display = 'block';
        }

        function hideLoading() {
        document.getElementById('loadingOverlay').style.display = 'none';
        }

        function showToast(message, type = 'info') {
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.textContent = message;

        const container = document.getElementById('toastContainer');
        container.appendChild(toast);

        setTimeout(() => {
        toast.remove();
        }, 5000);
        }

        // Initialize
        document.addEventListener('DOMContentLoaded', function() {
        // Load hidden predictions from localStorage
        const saved = localStorage.getItem('hiddenPredictions');
        if (saved) {
        hiddenPredictions = JSON.parse(saved);
        }

        // Close modals when clicking outside
        window.onclick = function(event) {
        const betModal = document.getElementById('betModal');
        const resolveModal = document.getElementById('resolveModal');

        if (event.target === betModal) {
            closeBetModal();
        }
        if (event.target === resolveModal) {
            closeResolveModal();
        }
        }

        // Add event listeners for bet modal
        const betChoice = document.getElementById('betChoice');
        const betAmount = document.getElementById('betAmount');

        if (betChoice) betChoice.addEventListener('change', calculatePotentialWinnings);
        if (betAmount) betAmount.addEventListener('input', calculatePotentialWinnings);

        console.log('🚀 Prediction Market initialized!');
        });