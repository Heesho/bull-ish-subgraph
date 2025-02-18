import { Transfer as TransferEvent } from "../generated/Bullish/Bullish";
import { User, Factory } from "../generated/schema";
import { ZERO_BD } from "./helpers";

export function handleTransfer(event: TransferEvent): void {
  let user = User.load(event.params.to);
  if (!user) {
    user = new User(event.params.to);
    user.save();
  }

  let factory = Factory.load(event.params.tokenId.toString());
  if (!factory) {
    factory = new Factory(event.params.tokenId.toString());
    factory.account = event.params.to;
    factory.moolaPerSecond = ZERO_BD;
    factory.moolaProduced = ZERO_BD;
    factory.moolaSpent = ZERO_BD;
  } else {
    factory.account = event.params.to;
  }
  factory.save();
}
