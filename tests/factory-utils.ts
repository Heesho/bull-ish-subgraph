import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  Factory__Claimed,
  Factory__LvlSet,
  Factory__ToolMultiplierSet,
  Factory__ToolPurchased,
  Factory__ToolSet,
  Factory__ToolUpgraded,
  OwnershipTransferred
} from "../generated/Factory/Factory"

export function createFactory__ClaimedEvent(
  tokenId: BigInt,
  amount: BigInt
): Factory__Claimed {
  let factoryClaimedEvent = changetype<Factory__Claimed>(newMockEvent())

  factoryClaimedEvent.parameters = new Array()

  factoryClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  factoryClaimedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return factoryClaimedEvent
}

export function createFactory__LvlSetEvent(
  lvl: BigInt,
  cost: BigInt,
  unlock: BigInt
): Factory__LvlSet {
  let factoryLvlSetEvent = changetype<Factory__LvlSet>(newMockEvent())

  factoryLvlSetEvent.parameters = new Array()

  factoryLvlSetEvent.parameters.push(
    new ethereum.EventParam("lvl", ethereum.Value.fromUnsignedBigInt(lvl))
  )
  factoryLvlSetEvent.parameters.push(
    new ethereum.EventParam("cost", ethereum.Value.fromUnsignedBigInt(cost))
  )
  factoryLvlSetEvent.parameters.push(
    new ethereum.EventParam("unlock", ethereum.Value.fromUnsignedBigInt(unlock))
  )

  return factoryLvlSetEvent
}

export function createFactory__ToolMultiplierSetEvent(
  index: BigInt,
  multiplier: BigInt
): Factory__ToolMultiplierSet {
  let factoryToolMultiplierSetEvent = changetype<Factory__ToolMultiplierSet>(
    newMockEvent()
  )

  factoryToolMultiplierSetEvent.parameters = new Array()

  factoryToolMultiplierSetEvent.parameters.push(
    new ethereum.EventParam("index", ethereum.Value.fromUnsignedBigInt(index))
  )
  factoryToolMultiplierSetEvent.parameters.push(
    new ethereum.EventParam(
      "multiplier",
      ethereum.Value.fromUnsignedBigInt(multiplier)
    )
  )

  return factoryToolMultiplierSetEvent
}

export function createFactory__ToolPurchasedEvent(
  tokenId: BigInt,
  toolId: BigInt,
  newAmount: BigInt,
  cost: BigInt,
  ups: BigInt
): Factory__ToolPurchased {
  let factoryToolPurchasedEvent = changetype<Factory__ToolPurchased>(
    newMockEvent()
  )

  factoryToolPurchasedEvent.parameters = new Array()

  factoryToolPurchasedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  factoryToolPurchasedEvent.parameters.push(
    new ethereum.EventParam("toolId", ethereum.Value.fromUnsignedBigInt(toolId))
  )
  factoryToolPurchasedEvent.parameters.push(
    new ethereum.EventParam(
      "newAmount",
      ethereum.Value.fromUnsignedBigInt(newAmount)
    )
  )
  factoryToolPurchasedEvent.parameters.push(
    new ethereum.EventParam("cost", ethereum.Value.fromUnsignedBigInt(cost))
  )
  factoryToolPurchasedEvent.parameters.push(
    new ethereum.EventParam("ups", ethereum.Value.fromUnsignedBigInt(ups))
  )

  return factoryToolPurchasedEvent
}

export function createFactory__ToolSetEvent(
  toolId: BigInt,
  baseUps: BigInt,
  baseCost: BigInt
): Factory__ToolSet {
  let factoryToolSetEvent = changetype<Factory__ToolSet>(newMockEvent())

  factoryToolSetEvent.parameters = new Array()

  factoryToolSetEvent.parameters.push(
    new ethereum.EventParam("toolId", ethereum.Value.fromUnsignedBigInt(toolId))
  )
  factoryToolSetEvent.parameters.push(
    new ethereum.EventParam(
      "baseUps",
      ethereum.Value.fromUnsignedBigInt(baseUps)
    )
  )
  factoryToolSetEvent.parameters.push(
    new ethereum.EventParam(
      "baseCost",
      ethereum.Value.fromUnsignedBigInt(baseCost)
    )
  )

  return factoryToolSetEvent
}

export function createFactory__ToolUpgradedEvent(
  tokenId: BigInt,
  toolId: BigInt,
  newLevel: BigInt,
  cost: BigInt,
  ups: BigInt
): Factory__ToolUpgraded {
  let factoryToolUpgradedEvent = changetype<Factory__ToolUpgraded>(
    newMockEvent()
  )

  factoryToolUpgradedEvent.parameters = new Array()

  factoryToolUpgradedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  factoryToolUpgradedEvent.parameters.push(
    new ethereum.EventParam("toolId", ethereum.Value.fromUnsignedBigInt(toolId))
  )
  factoryToolUpgradedEvent.parameters.push(
    new ethereum.EventParam(
      "newLevel",
      ethereum.Value.fromUnsignedBigInt(newLevel)
    )
  )
  factoryToolUpgradedEvent.parameters.push(
    new ethereum.EventParam("cost", ethereum.Value.fromUnsignedBigInt(cost))
  )
  factoryToolUpgradedEvent.parameters.push(
    new ethereum.EventParam("ups", ethereum.Value.fromUnsignedBigInt(ups))
  )

  return factoryToolUpgradedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}
