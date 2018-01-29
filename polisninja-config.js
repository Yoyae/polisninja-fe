/*
 This file is part of Polis Ninja.
 https://github.com/Yoyae/polisninja-fe

 Polis Ninja is free software: you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 Polis Ninja is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.

 You should have received a copy of the GNU General Public License
 along with Polis Ninja.  If not, see <http://www.gnu.org/licenses/>.

 */

// Either indicate if we are we on testnet (=1) or on mainnet (=0)
//var polisninjatestnet = 0;
// OR indicate the hostname for testnet (if the hostname the page is running is equal to this, it will switch to testnet)
var polisninjatestnethost = 'test.polis-ninja.org'; //TODO
var polisninjatestnetexplorer = 'test.explorer.polis-ninja.org'; //TODO

// Tor onion hostname
//var polisninjator = 'seuhd5sihasshuqh.onion'; //TODO
//var polisninjai2p = 'dzjzoefy7fx57h5xkdknikvfv3ckbxu2bx5wryn6taud343g2jma.b32.i2p'; //TODO

// Coin logos
var polisninjacoin = ['POLIS','tPOLIS'];

// Block explorer
var polisninjablockexplorer = [[["https://explorer.polispay.org/block/%%b%%","Official Polis Blockchain Explorer"],
                           ["https://insight.polispay.org/block/%%b%%","Official Polis (insight) Blockchain Explorer"]],
                           ["http://104.236.32.131/block/%%b%%","Official Polis (insight) Blockchain Explorer"]];

// Address info
var polisninjamndetail = [[["/mndetails.html?mnpubkey=%%a%%","Polis Ninja Masternode Detail"]],
                         [["/mndetails.html?mnpubkey=%%a%%","Polis Ninja Testnet Masternode Detail"]]];
var polisninjamndetailvin = [[["/mndetails.html?mnoutput=%%a%%","Polis Ninja Masternode Detail"]],
                            [["/mndetails.html?mnoutput=%%a%%","Polis Ninja Testnet Masternode Detail"]]];

// Address explorer
var polisninjaaddressexplorer = [[["https://explorer.polispay.org/address/%%b%%","Official Polis Blockchain Explorer"],
                           ["https://insight.polispay.org/address/%%b%%","Official Polis (insight) Blockchain Explorer"]],
                           ["http://104.236.32.131/address/%%b%%","Official Polis (insight) Blockchain Explorer"]];

// Transaction explorer
var polisninjatxexplorer = [[["https://explorer.polispay.org/tx/%%b%%","Official Polis Blockchain Explorer"],
                           ["https://insight.polispay.org/tx/%%b%%","Official Polis (insight) Blockchain Explorer"]],
                           ["http://104.236.32.131/tx/%%b%%","Official Polis (insight) Blockchain Explorer"]];

// Search query
var polisninjaqueryexplorer = [[],[]];

var polisninjamasternodemonitoring = ["/masternodes.html?mnregexp=%%p%%#mnversions","/masternodes.html?mnregexp=%%p%%#mnversions"];

var polisninjabudgetdetail = ["/budgetdetails.html?budgetid=%%b%%","/budgetdetails.html?budgetid=%%b%%"];

var polisninjagovernanceproposaldetail = ["/proposaldetails.html?proposalhash=%%b%%","/proposaldetails.html?proposalhash=%%b%%"];

// Blocks per day
var polisblocksperday = 720;