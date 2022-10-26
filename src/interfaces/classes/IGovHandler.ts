import { IDelegationRewards, IStakingValidator } from '../'

export default interface IGovHandler {
  txAddr26657: string
  queryAddr1317: string
  distributionTxClient: any
  distributionQueryClient: any
  govTxClient: any
  govQueryClient: any
  stakingTxClient: any
  stakingQueryClient: any

  getTotalRewards (): Promise<IDelegationRewards>
  getRewards (): Promise<IDelegationRewards>
  getTotalStaked (): Promise<number>
  getMyValidatorDetails (validatorAddress: string): Promise<IStakingValidator>
  getValidatorDetails (validatorAddress: string): Promise<IStakingValidator>
  getAllValidatorDetails (): Promise<IStakingValidator[]>
  delegatedValidators (): Promise<IStakingValidator[]>
  claimDelegatorRewards (validatorAddresses: string[]): Promise<void>
  delegateTokens (delegator_address: string, validator_address: string, amount: number): Promise<void>

}
