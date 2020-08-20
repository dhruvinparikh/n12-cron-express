require("dotenv").config();
const convict = require("convict");

const uniswapSchema = convict({
  uniswapV2FactoryAdress: {
    doc: "Uniswap V2 factory address",
    format: "String",
    default: "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f",
    env: "UNISWAP_V2_ADDRESS",
  },
  uniswapV2FactoryInitCodeHash: {
    doc: "Uniswap V2 factory init code hash",
    format: "String",
    default: "0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f",
    env: "UNISWAP_V2_FACTORY_INIT_CODE_HASH",
  },
  wethAddress: {
    doc: "WETH token contract address on mainnet",
    format: "String",
    default: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    env: "WETH_ADDRESS",
  },
  wbtcAddress: {
    doc: "WBTC token contract address on mainnet",
    format: "String",
    default: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
    env: "WBTC_ADDRESS",
  },
  "0xbtcAddress": {
    doc: "0xBTC token contract address on mainnet",
    format: "String",
    default: "0xB6eD7644C69416d67B522e20bC294A9a9B405B31",
    env: "0xBTC_ADDRESS",
  },
  daiAddress: {
    doc: "dai token contract address on mainnet",
    format: "String",
    default: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
    env: "DAI_ADDRESS",
  },
  linkAddress: {
    doc: "dai token contract address on mainnet",
    format: "String",
    default: "0x514910771AF9Ca656af840dff83E8264EcF986CA",
    env: "LINK_ADDRESS",
  },
  shufAddress: {
    doc: "shuffle.monster token contract address on mainnet",
    format: "String",
    default: "0x3A9FfF453d50D4Ac52A6890647b823379ba36B9E",
    env: "SHUF_ADDRESS",
  },
  usdcAddress: {
    doc: "USD.coin token contract address on mainnet",
    format: "String",
    default: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    env: "USDC_ADDRESS",
  },
  usdtAddress: {
    doc: "Tether USD token contract address on mainnet",
    format: "String",
    default: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    env: "USDT_ADDRESS",
  },
  adaiAddress: {
    doc: "Aave interest bearing DAI token contract address on mainnet",
    format: "String",
    default: "0xfC1E690f61EFd961294b3e1Ce3313fBD8aa4f85d",
    env: "aDAI_ADDRESS",
  },
  amnAddress: {
    doc: "Amon token contract address on mainnet",
    format: "String",
    default: "0x737F98AC8cA59f2C68aD658E3C3d8C8963E40a4c",
    env: "AMN_ADDRESS",
  },
  amplAddress: {
    doc: "Ampleforth token contract address on mainnet",
    format: "String",
    default: "0xD46bA6D942050d489DBd938a2C909A5d5039A161",
    env: "AMPL_ADDRESS",
  },
  antAddress: {
    doc: "Aragon network token contract address on mainnet",
    format: "String",
    default: "0x960b236A07cf122663c4303350609A66A7B288C0",
    env: "ANT_ADDRESS",
  },
  batAddress: {
    doc: "Basic attention token contract address on mainnet",
    format: "String",
    default: "0x0D8775F648430679A709E98d2b0Cb6250d2887EF",
    env: "BAT_ADDRESS",
  },
  bntAddress: {
    doc: "Bancor network token contract address on mainnet",
    format: "String",
    default: "0x1F573D6Fb3F13d689FF844B4cE37794d79a7FF1C",
    env: "BNT_ADDRESS",
  },
  compAddress: {
    doc: "Compound token contract address on mainnet",
    format: "String",
    default: "0xc00e94Cb662C3520282E6f5717214004A7f26888",
    env: "COMP_ADDRESS",
  },
  dataAddress: {
    doc: "Streamr DATAcoin token contract address on mainnet",
    format: "String",
    default: "0x0Cf0Ee63788A0849fE5297F3407f701E122cC023",
    env: "DATA_ADDRESS",
  },
  enjAddress: {
    doc: "Enjin coin token contract address on mainnet",
    format: "String",
    default: "0xF629cBd94d3791C9250152BD8dfBDF380E2a3B9c",
    env: "ENJ_ADDRESS",
  },
  kncAddress: {
    doc: "kyber network crystal coin token contract address on mainnet",
    format: "String",
    default: "0xdd974D5C2e2928deA5F71b9825b8b646686BD200",
    env: "KNC_ADDRESS",
  },
  lendAddress: {
    doc: "EthLend token contract address on mainnet",
    format: "String",
    default: "0x80fB784B7eD66730e8b1DBd9820aFD29931aab03",
    env: "LEND_ADDRESS",
  },
  lptAddress: {
    doc: "Livepeer token contract address on mainnet",
    format: "String",
    default: "0x58b6A8A3302369DAEc383334672404Ee733aB239",
    env: "LPT_ADDRESS",
  },
  paxgAddress: {
    doc: "Paxos gold token contract address on mainnet",
    format: "String",
    default: "0x45804880De22913dAFE09f4980848ECE6EcbAf78",
    env: "PAXG_ADDRESS",
  },
  qntAddress: {
    doc: "Quant token contract address on mainnet",
    format: "String",
    default: "0x4a220E6096B25EADb88358cb44068A3248254675",
    env: "QNT_ADDRESS",
  },
  renAddress: {
    doc: "Republic token contract address on mainnet",
    format: "String",
    default: "0x408e41876cCCDC0F92210600ef50372656052a38",
    env: "REN_ADDRESS",
  },
  renbtcAddress: {
    doc: "renBTC token contract address on mainnet",
    format: "String",
    default: "0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D",
    env: "RENBTC_ADDRESS",
  },
  repAddress: {
    doc: "Reputation Augur v1 token contract address on mainnet",
    format: "String",
    default: "0x1985365e9f78359a9B6AD760e32412f4a445E862",
    env: "REP_ADDRESS",
  },
  snxAddress: {
    doc: "Synthetix Network token contract address on mainnet",
    format: "String",
    default: "0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F",
    env: "SNX_ADDRESS",
  },
  trbAddress: {
    doc: "Telloe Tributes token contract address on mainnet",
    format: "String",
    default: "0x0Ba45A8b5d5575935B8158a88C631E9F9C95a2e5",
    env: "TRB_ADDRESS",
  },
  trybAddress: {
    doc: "BiLira token contract address on mainnet",
    format: "String",
    default: "0x2C537E5624e4af88A7ae4060C022609376C8D0EB",
    env: "TRYB_ADDRESS",
  },
  tusdAddress: {
    doc: "TrueUSD token contract address on mainnet",
    format: "String",
    default: "0x0000000000085d4780B73119b644AE5ecd22b376",
    env: "TUSD_ADDRESS",
  },
  umaAddress: {
    doc: "UMA Voting Token v1 token contract address on mainnet",
    format: "String",
    default: "0x04Fa0d235C4abf4BcF4787aF4CF447DE572eF828",
    env: "UMA_ADDRESS",
  },
  zrxAddress: {
    doc: "0x protocol token contract address on mainnet",
    format: "String",
    default: "0xE41d2489571d322189246DaFA5ebDe1F4699F498",
    env: "ZRX_ADDRESS",
  },
  anjAddress: {
    doc: "Aragon Network Juror token contract address on mainnet",
    format: "String",
    default: "0xcD62b1C403fa761BAadFC74C525ce2B51780b184",
    env: "ANJ_ADDRESS",
  },
  astAddress: {
    doc: "Airswap token contract address on mainnet",
    format: "String",
    default: "0x27054b13b1B798B345b591a4d22e6562d47eA75a",
    env: "AST_ADDRESS",
  },
  balAddress: {
    doc: "Balancer token contract address on mainnet",
    format: "String",
    default: "0xba100000625a3754423978a60c9317c58a424e3D",
    env: "BAL_ADDRESS",
  },
  gst2Address: {
    doc: "Gastoken.io token contract address on mainnet",
    format: "String",
    default: "0x0000000000b3F879cb30FE243b4Dfee438691c04",
    env: "GST2_ADDRESS",
  },
  bandAddress: {
    doc: "Band token contract address on mainnet",
    format: "String",
    default: "0xBA11D00c5f74255f56a5E366F4F77f5A186d7f55",
    env: "BAND_ADDRESS",
  },
  oceanAddress: {
    doc: "Ocean token contract address on mainnet",
    format: "String",
    default: "0x985dd3D42De1e256d09e1c10F112bCCB8015AD41",
    env: "OCEAN_ADDRESS",
  },
  bltAddress: {
    doc: "Bloom token contract address on mainnet",
    format: "String",
    default: "0x107c4504cd79C5d2696Ea0030a8dD4e92601B82e",
    env: "BLT_ADDRESS",
  },
  "btc++Address": {
    doc: "PieDAO BTC++ token contract address on mainnet",
    format: "String",
    default: "0x0327112423F3A68efdF1fcF402F6c5CB9f7C33fd",
    env: "BTC++_ADDRESS",
  },
  bzrxAddress: {
    doc: "bZx protocol tokenc ontract address on mainnet",
    format: "String",
    default: "0x56d811088235F11C8920698a204A5010a788f4b3",
    env: "BZRX_ADDRESS",
  },
  cdaiAddress: {
    doc: "Compound Dai token contract address on mainnet",
    format: "String",
    default: "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
    env: "CDAI_ADDRESS",
  },
  cusdcAddress: {
    doc: "Compound USD coin token contract address on mainnet",
    format: "String",
    default: "0x39AA39c021dfbaE8faC545936693aC917d5E7563",
    env: "CUSDC_ADDRESS",
  },
  celAddress: {
    doc: "Celsius token contract address on mainnet",
    format: "String",
    default: "0xaaAEBE6Fe48E54f431b0C390CfaF0b017d09D42d",
    env: "CEL_ADDRESS",
  },
  celrAddress: {
    doc: "Celer token contract address on mainnet",
    format: "String",
    default: "0x4F9254C83EB525f9FCf346490bbb3ed28a81C667",
    env: "CELR_ADDRESS",
  },
  chaiAddress: {
    doc: "Chai token contract address on mainnet",
    format: "String",
    default: "0x06AF07097C9Eeb7fD685c692751D5C66dB49c215",
    env: "CHAI_ADDRESS",
  },
  fxcAddress: {
    doc: "Flexacoin token contract address on mainnet",
    format: "String",
    default: "0x4a57E687b9126435a9B19E4A802113e266AdeBde",
    env: "FXC_ADDRESS",
  },
  csaiAddress: {
    doc: "Compound Dai token contract address on mainnet",
    format: "String",
    default: "0xF5DCe57282A584D2746FaF1593d3121Fcac444dC",
    env: "CSAI_ADDRESS",
  },
  donutAddress: {
    doc: "Donut token contract address on mainnet",
    format: "String",
    default: "0xC0F9bD5Fa5698B6505F643900FFA515Ea5dF54A9",
    env: "DONUT_ADDRESS",
  },
  ebaseAddress: {
    doc: "Eurbase stablecoin token contract address on mainnet",
    format: "String",
    default: "0x86FADb80d8D2cff3C3680819E4da99C10232Ba0F",
    env: "EBASE_ADDRESS",
  },
  funAddress: {
    doc: "FunFair token contract address on mainnet",
    format: "String",
    default: "0x419D0d8BdD9aF5e606Ae2232ed285Aff190E711b",
    env: "FUN_ADDRESS",
  },
  manaAddress: {
    doc: "Decentraland MANA token contract address on mainnet",
    format: "String",
    default: "0x0F5D2fB29fb7d3CFeE444a200298f468908cC942",
    env: "MANA_ADDRESS",
  },
  musdAddress: {
    doc: "mStable USD token contract address on mainnet",
    format: "String",
    default: "0xe2f2a5C287993345a840Db3B0845fbC70f5935a5",
    env: "MUSD_ADDRESS",
  },
  nmrAddress: {
    doc: "Numeraire token contract address on mainnet",
    format: "String",
    default: "0x1776e1F26f98b1A5dF9cD347953a26dd3Cb46671",
    env: "NMR_ADDRESS",
  },
  qchAddress: {
    doc: "QChi token contract address on mainnet",
    format: "String",
    default: "0x687BfC3E73f6af55F0CccA8450114D107E781a0e",
    env: "QCH_ADDRESS",
  },
  rdnAddress: {
    doc: "Raiden token contract address on mainnet",
    format: "String",
    default: "0x255Aa6DF07540Cb5d3d297f0D0D4D84cb52bc8e6",
    env: "RDN_ADDRESS",
  },
  renbchAddress: {
    doc: "renBCH token contract address on mainnet",
    format: "String",
    default: "0x459086F2376525BdCebA5bDDA135e4E9d3FeF5bf",
    env: "RENBCH_ADDRESS",
  },
  renzecAddress: {
    doc: "renZEC token contract address on mainnet",
    format: "String",
    default: "0x1C5db575E2Ff833E46a2E9864C22F4B22E0B37C2",
    env: "RENZEC_ADDRESS",
  },
  repv2Address: {
    doc: "Reputation Augur v2 token contract address on mainnet",
    format: "String",
    default: "0x221657776846890989a759BA2973e427DfF5C9bB",
    env: "REPV2_ADDRESS",
  },
  ringAddress: {
    doc: "Darwinia Network Native token contract address on mainnet",
    format: "String",
    default: "0x9469D013805bFfB7D3DEBe5E7839237e535ec483",
    env: "RING_ADDRESS",
  },
  rlcAddress: {
    doc: "iEx.ec Network Token contract address on mainnet",
    format: "String",
    default: "0x607F4C5BB672230e8672085532f7e901544a7375",
    env: "RLC_ADDRESS",
  },
  rplAddress: {
    doc: "Rocket pool Token contract address on mainnet",
    format: "String",
    default: "0xB4EFd85c19999D84251304bDA99E90B92300Bd93",
    env: "RPL_ADDRESS",
  },
  sntAddress: {
    doc: "Status network Token contract address on mainnet",
    format: "String",
    default: "0x744d70FDBE2Ba4CF95131626614a1763DF805B9E",
    env: "SNT_ADDRESS",
  },
  socksAddress: {
    doc: "Unisocks Edition 0 Token contract address on mainnet",
    format: "String",
    default: "0x23B608675a2B2fB1890d3ABBd85c5775c51691d5",
    env: "SOCKS_ADDRESS",
  },
  spankAddress: {
    doc: "SPANK token contract address on mainnet",
    format: "String",
    default: "0x42d6622deCe394b54999Fbd73D108123806f6a18",
    env: "SPANK_ADDRESS",
  },
  stakeAddress: {
    doc: "STAKE token contract address on mainnet",
    format: "String",
    default: "0x0Ae055097C6d159879521C384F1D2123D1f195e6",
    env: "STAKE_ADDRESS",
  },
  storjAddress: {
    doc: "STORJ token contract address on mainnet",
    format: "String",
    default: "0xB64ef51C888972c908CFacf59B47C1AfBC0Ab8aC",
    env: "STORJ_ADDRESS",
  },
  susdAddress: {
    doc: "Synth USD token contract address on mainnet",
    format: "String",
    default: "0x57Ab1ec28D129707052df4dF418D58a2D46d5f51",
    env: "SUSD_ADDRESS",
  },
  sxpAddress: {
    doc: "Swipe token contract address on mainnet",
    format: "String",
    default: "0x8CE9137d39326AD0cD6491fb5CC0CbA0e089b6A9",
    env: "SXP_ADDRESS",
  },
  ubtAddress: {
    doc: "UniBright token contract address on mainnet",
    format: "String",
    default: "0x8400D94A5cb0fa0D041a3788e395285d61c9ee5e",
    env: "UBT_ADDRESS",
  },
  "usd++Address": {
    doc: "PieDAO USD++ token contract address on mainnet",
    format: "String",
    default: "0x9A48BD0EC040ea4f1D3147C025cd4076A2e71e3e",
    env: "USD++_ADDRESS",
  },
  wckAddress: {
    doc: "Wrapped CryptoKitties token contract address on mainnet",
    format: "String",
    default: "0x09fE5f0236F0Ea5D930197DCE254d77B04128075",
    env: "WCK_ADDRESS",
  },
  xioAddress: {
    doc: "XIO Network token contract address on mainnet",
    format: "String",
    default: "0x0f7F961648aE6Db43C75663aC7E5414Eb79b5704",
    env: "XIO_ADDRESS",
  },
  dgdAddress: {
    doc: "DigixDAO token contract address on mainnet",
    format: "String",
    default: "0xE0B7927c4aF23765Cb51314A0E0521A9645F0E2A",
    env: "DGD_ADDRESS",
  },
  dgxAddress: {
    doc: "Digix Gold token contract address on mainnet",
    format: "String",
    default: "0x4f3AfEC4E5a3F2A6a1A411DEF7D7dFe50eE057bF",
    env: "DGX_ADDRESS",
  },
  dipAddress: {
    doc: "Decentralized Insurance Protocol token contract address on mainnet",
    format: "String",
    default: "0xc719d010B63E5bbF2C0551872CD5316ED26AcD83",
    env: "DIP_ADDRESS",
  },
  foamAddress: {
    doc: "Foam token contract address on mainnet",
    format: "String",
    default: "0x4946Fcea7C692606e8908002e55A582af44AC121",
    env: "FOAM_ADDRESS",
  },
  genAddress: {
    doc: "DAOstack token contract address on mainnet",
    format: "String",
    default: "0x543Ff227F64Aa17eA132Bf9886cAb5DB55DCAddf",
    env: "GEN_ADDRESS",
  },
  gnoAddress: {
    doc: "Gnosis token contract address on mainnet",
    format: "String",
    default: "0x6810e776880C02933D47DB1b9fc05908e5386b96",
    env: "GNO_ADDRESS",
  },
  gridAddress: {
    doc: "GRID token contract address on mainnet",
    format: "String",
    default: "0x12B19D3e2ccc14Da04FAe33e63652ce469b3F2FD",
    env: "GRID_ADDRESS",
  },
  hotAddress: {
    doc: "HoloToken contract address on mainnet",
    format: "String",
    default: "0x6c6EE5e31d828De241282B9606C8e98Ea48526E2",
    env: "HOT_ADDRESS",
  },
  iotxAddress: {
    doc: "IoTeX Network token contract address on mainnet",
    format: "String",
    default: "0x6fB3e0A217407EFFf7Ca062D46c26E5d60a14d69",
    env: "IOTX_ADDRESS",
  },
  isaiAddress: {
    doc: "Fulcrum SAI iToken contract address on mainnet",
    format: "String",
    default: "0x14094949152EDDBFcd073717200DA82fEd8dC960",
    env: "ISAI_ADDRESS",
  },
  keyAddress: {
    doc: "KEY token contract address on mainnet",
    format: "String",
    default: "0x4Cd988AfBad37289BAAf53C13e98E2BD46aAEa8c",
    env: "KEY_ADDRESS",
  },
  mkrAddress: {
    doc: "Maker token contract address on mainnet",
    format: "String",
    default: "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2",
    env: "MKR_ADDRESS",
  },
  mlnAddress: {
    doc: "Melon Token contract address on mainnet",
    format: "String",
    default: "0xec67005c4E498Ec7f55E092bd1d35cbC47C91892",
    env: "MLN_ADDRESS",
  },
  tknAddress: {
    doc: "Monolith TKN contract address on mainnet",
    format: "String",
    default: "0xaAAf91D9b90dF800Df4F55c205fd6989c977E73a",
    env: "TKN_ADDRESS",
  },
  loomAddress: {
    doc: "Loom token contract address on mainnet",
    format: "String",
    default: "0xA4e8C3Ec456107eA67d3075bF9e3DF3A75823DB0",
    env: "LOOM_ADDRESS",
  },
  lqdAddress: {
    doc: "Liquidity.Network token contract address on mainnet",
    format: "String",
    default: "0xD29F0b5b3F50b07Fe9a9511F7d86F4f4bAc3f8c4",
    env: "LQD_ADDRESS",
  },
  lrcAddress: {
    doc: "LoopringCoin V2 token contract address on mainnet",
    format: "String",
    default: "0xBBbbCA6A901c926F240b89EacB641d8Aec7AEafD",
    env: "LRC_ADDRESS",
  },
  maticAddress: {
    doc: "Matic token contract address on mainnet",
    format: "String",
    default: "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0",
    env: "MATIC_ADDRESS",
  },
  mbcAddress: {
    doc: "Marblecoin token contract address on mainnet",
    format: "String",
    default: "0x8888889213DD4dA823EbDD1e235b09590633C150",
    env: "MBC_ADDRESS",
  },
  mcxAddress: {
    doc: "MachiX token contract address on mainnet",
    format: "String",
    default: "0xd15eCDCF5Ea68e3995b2D0527A0aE0a3258302F8",
    env: "MCX_ADDRESS",
  },
  metAddress: {
    doc: "Metronome token contract address on mainnet",
    format: "String",
    default: "0xa3d58c4E56fedCae3a7c43A725aeE9A71F0ece4e",
    env: "MET_ADDRESS",
  },
  modAddress: {
    doc: "Modum token contract address on mainnet",
    format: "String",
    default: "0x957c30aB0426e0C93CD8241E2c60392d08c6aC8e",
    env: "MOD_ADDRESS",
  },
  nexoAddress: {
    doc: "Nexo token contract address on mainnet",
    format: "String",
    default: "0xB62132e35a6c13ee1EE0f84dC5d40bad8d815206",
    env: "NEXO_ADDRESS",
  },
  oxtAddress: {
    doc: "Orchid token contract address on mainnet",
    format: "String",
    default: "0x4575f41308EC1483f3d399aa9a2826d74Da13Deb",
    env: "OXT_ADDRESS",
  },
  panAddress: {
    doc: "Panvala pan token contract address on mainnet",
    format: "String",
    default: "0xD56daC73A4d6766464b38ec6D91eB45Ce7457c44",
    env: "PAN_ADDRESS",
  },
  paxAddress: {
    doc: "PAX token contract address on mainnet",
    format: "String",
    default: "0x8E870D67F660D95d5be530380D0eC0bd388289E1",
    env: "PAX_ADDRESS",
  },
  pnkAddress: {
    doc: "Pinakion token contract address on mainnet",
    format: "String",
    default: "0x93ED3FBe21207Ec2E8f2d3c3de6e058Cb73Bc04d",
    env: "PNK_ADDRESS",
  },
  qspAddress: {
    doc: "Quantstamp token contract address on mainnet",
    format: "String",
    default: "0x99ea4dB9EE77ACD40B119BD1dC4E33e1C070b80d",
    env: "QSP_ADDRESS",
  },
  rcnAddress: {
    doc: "Ripio credit network token contract address on mainnet",
    format: "String",
    default: "0xF970b8E36e23F7fC3FD752EeA86f8Be8D83375A6",
    env: "RCN_ADDRESS",
  },
  saiAddress: {
    doc: "Dai Stablecoin v1.0 SAI token contract address on mainnet",
    format: "String",
    default: "0x89d24A6b4CcB1B6fAA2625fE562bDD9a23260359",
    env: "SAI_ADDRESS",
  },
  saltAddress: {
    doc: "Salt token contract address on mainnet",
    format: "String",
    default: "0x4156D3342D5c385a87D264F90653733592000581",
    env: "SALT_ADDRESS",
  },
  sanAddress: {
    doc: "SANtiment token contract address on mainnet",
    format: "String",
    default: "0x7C5A0CE9267ED19B22F8cae653F198e3E8daf098",
    env: "SAN_ADDRESS",
  },
  sethAddress: {
    doc: "Synth Eth token contract address on mainnet",
    format: "String",
    default: "0x5e74C9036fb86BD7eCdcb084a0673EFc32eA31cb",
    env: "SETH_ADDRESS",
  },
  sxauAddress: {
    doc: "Synth sXAU token contract address on mainnet",
    format: "String",
    default: "0x261EfCdD24CeA98652B9700800a13DfBca4103fF",
    env: "SXAU_ADDRESS",
  },
  tgbpAddress: {
    doc: "TrueGBP token contract address on mainnet",
    format: "String",
    default: "0x00000000441378008EA67F4284A57932B1c000a5",
    env: "TGBP_ADDRESS",
  },
  trstAddress: {
    doc: "Trustcoin token contract address on mainnet",
    format: "String",
    default: "0xCb94be6f13A1182E4A4B6140cb7bf2025d28e41B",
    env: "TRST_ADDRESS",
  },
  usdxAddress: {
    doc: "dForce token contract address on mainnet",
    format: "String",
    default: "0xeb269732ab75A6fD61Ea60b06fE994cD32a83549",
    env: "USDX_ADDRESS",
  },
  veriAddress: {
    doc: "Veritaseum token contract address on mainnet",
    format: "String",
    default: "0x8f3470A7388c05eE4e7AF3d01D8C722b0FF52374",
    env: "VERI_ADDRESS",
  },
  xchfAddress: {
    doc: "CryptoFranc token contract address on mainnet",
    format: "String",
    default: "0xB4272071eCAdd69d933AdcD19cA99fe80664fc08",
    env: "XCHF_ADDRESS",
  },
});

const getUniswapV2FactoryAdress = () => {
  try {
    const result = uniswapSchema.get("uniswapV2FactoryAdress");
    return result;
  } catch (error) {
    throw Error("Missing uniswapV2FactoryAdress");
  }
};

const getUniswapV2FactoryInitCodeHash = () => {
  try {
    const result = uniswapSchema.get("uniswapV2FactoryInitCodeHash");
    return result;
  } catch (error) {
    throw Error("Missing uniswapV2FactoryInitCodeHash");
  }
};

const getWETHAddress = () => {
  try {
    const result = uniswapSchema.get("wethAddress");
    return result;
  } catch (error) {
    throw Error("Missing wethAddress");
  }
};

const getWBTCAddress = () => {
  try {
    const result = uniswapSchema.get("wbtcAddress");
    return result;
  } catch (error) {
    throw Error("Missing wbtcAddress");
  }
};

const getTokenAddress = (name) => {
  try {
    const result = uniswapSchema.get(name);
    return result;
  } catch (error) {
    throw Error(`Missing ${name}`);
  }
};

uniswapSchema.validate({ allowed: "strict" });

module.exports = {
  ...uniswapSchema,
  getUniswapV2FactoryAdress,
  getUniswapV2FactoryInitCodeHash,
  getWETHAddress,
  getWBTCAddress,
  getTokenAddress,
};
