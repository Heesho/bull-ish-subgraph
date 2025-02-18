import {
  Factory__Claimed as Factory__ClaimedEvent,
  Factory__ToolPurchased as Factory__ToolPurchasedEvent,
  Factory__ToolUpgraded as Factory__ToolUpgradedEvent,
} from "../generated/Factory/Factory";
import { Factory, Tool } from "../generated/schema";
import { ZERO_BD, ZERO_BI, convertEthToDecimal } from "./helpers";

export function handleFactory__Claimed(event: Factory__ClaimedEvent): void {
  let factory = Factory.load(event.params.tokenId.toString());
  if (!factory) {
    factory = new Factory(event.params.tokenId.toString());
    factory.moolaPerSecond = ZERO_BD;
    factory.moolaProduced = ZERO_BD;
    factory.moolaSpent = ZERO_BD;
  }
  factory.moolaProduced = factory.moolaProduced.plus(
    convertEthToDecimal(event.params.amount)
  );

  factory.save();
}

export function handleFactory__ToolPurchased(
  event: Factory__ToolPurchasedEvent
): void {
  let factory = Factory.load(event.params.tokenId.toString());
  if (!factory) {
    factory = new Factory(event.params.tokenId.toString());
    factory.moolaPerSecond = ZERO_BD;
    factory.moolaProduced = ZERO_BD;
    factory.moolaSpent = ZERO_BD;
  }
  factory.moolaPerSecond = convertEthToDecimal(event.params.ups);
  factory.moolaSpent = factory.moolaSpent.plus(
    convertEthToDecimal(event.params.cost)
  );

  const toolId = `${event.params.tokenId.toString()}-${event.params.toolId.toString()}`;
  let tool = Tool.load(toolId);
  if (!tool) {
    tool = new Tool(toolId);
    tool.factory = factory.id;
    tool.amount = ZERO_BI;
    tool.level = ZERO_BI;
  }
  tool.amount = event.params.newAmount;

  tool.save();
  factory.save();
}

export function handleFactory__ToolUpgraded(
  event: Factory__ToolUpgradedEvent
): void {
  let factory = Factory.load(event.params.tokenId.toString());
  if (!factory) {
    factory = new Factory(event.params.tokenId.toString());
    factory.moolaPerSecond = ZERO_BD;
    factory.moolaProduced = ZERO_BD;
    factory.moolaSpent = ZERO_BD;
  }
  factory.moolaPerSecond = convertEthToDecimal(event.params.ups);
  factory.moolaSpent = factory.moolaSpent.plus(
    convertEthToDecimal(event.params.cost)
  );

  let toolId = `${event.params.tokenId.toString()}-${event.params.toolId.toString()}`;
  let tool = Tool.load(toolId);
  if (!tool) {
    tool = new Tool(toolId);
    tool.factory = factory.id;
    tool.amount = ZERO_BI;
    tool.level = ZERO_BI;
  }
  tool.level = event.params.newLevel;

  tool.save();
  factory.save();
}
