import {
  Factory__Claimed as Factory__ClaimedEvent,
  Factory__LvlSet as Factory__LvlSetEvent,
  Factory__ToolMultiplierSet as Factory__ToolMultiplierSetEvent,
  Factory__ToolPurchased as Factory__ToolPurchasedEvent,
  Factory__ToolSet as Factory__ToolSetEvent,
  Factory__ToolUpgraded as Factory__ToolUpgradedEvent,
  OwnershipTransferred as OwnershipTransferredEvent
} from "../generated/Factory/Factory"
import {
  Factory__Claimed,
  Factory__LvlSet,
  Factory__ToolMultiplierSet,
  Factory__ToolPurchased,
  Factory__ToolSet,
  Factory__ToolUpgraded,
  OwnershipTransferred
} from "../generated/schema"

export function handleFactory__Claimed(event: Factory__ClaimedEvent): void {
  let entity = new Factory__Claimed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.tokenId = event.params.tokenId
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFactory__LvlSet(event: Factory__LvlSetEvent): void {
  let entity = new Factory__LvlSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.lvl = event.params.lvl
  entity.cost = event.params.cost
  entity.unlock = event.params.unlock

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFactory__ToolMultiplierSet(
  event: Factory__ToolMultiplierSetEvent
): void {
  let entity = new Factory__ToolMultiplierSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.index = event.params.index
  entity.multiplier = event.params.multiplier

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFactory__ToolPurchased(
  event: Factory__ToolPurchasedEvent
): void {
  let entity = new Factory__ToolPurchased(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.tokenId = event.params.tokenId
  entity.toolId = event.params.toolId
  entity.newAmount = event.params.newAmount
  entity.cost = event.params.cost
  entity.ups = event.params.ups

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFactory__ToolSet(event: Factory__ToolSetEvent): void {
  let entity = new Factory__ToolSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.toolId = event.params.toolId
  entity.baseUps = event.params.baseUps
  entity.baseCost = event.params.baseCost

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFactory__ToolUpgraded(
  event: Factory__ToolUpgradedEvent
): void {
  let entity = new Factory__ToolUpgraded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.tokenId = event.params.tokenId
  entity.toolId = event.params.toolId
  entity.newLevel = event.params.newLevel
  entity.cost = event.params.cost
  entity.ups = event.params.ups

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
