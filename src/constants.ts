import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  MAINNET = 56789,
  RINKEBY = 4,
  NODOKA_TEST = 56788
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

// export const FACTORY_ADDRESS = '0x6aDc83Bb958916515CDa21207aE05EFE66Cee10f'
// export const INIT_CODE_HASH = '0x70c6c3aa8239fbce9791ff777adb27491a66a35c18fe93bdb8fcbb5419489316'

export const FACTORY_ADDRESS = '0xA5427f02204bc7e83De585b3a1afFD7f98fd2673'
export const INIT_CODE_HASH = '0x960e30cc556b97cb3044191bb90c4332eb8f018f131e7aba7a1ae67e2949a178'

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
