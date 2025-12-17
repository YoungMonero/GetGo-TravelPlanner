import { useState } from "react";
import { ArrowRightLeft, DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./Card";
import { Input } from "./Input";     

const CurrencyCard = ({ currency }) => {
  const [amount, setAmount] = useState("100");
  const [isReversed, setIsReversed] = useState(false);

  const numAmount = parseFloat(amount) || 0;
  const convertedAmount = isReversed
    ? numAmount / currency.exchangeRate
    : numAmount * currency.exchangeRate;

  const fromCurrency = isReversed ? currency.code : currency.baseCurrency;
  const toCurrency = isReversed ? currency.baseCurrency : currency.code;

  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-xl">
          <span className="p-2 rounded-lg bg-golden/10">
            <DollarSign className="w-5 h-5 text-golden" />
          </span>
          Currency Exchange
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Currency Info */}
          <div className="p-4 bg-secondary/50 rounded-xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Local Currency</p>
                <p className="text-2xl font-display font-bold">
                  {currency.symbol} {currency.code}
                </p>
                <p className="text-sm text-muted-foreground">{currency.name}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Exchange Rate</p>
                <p className="text-lg font-semibold text-ocean">
                  1 {currency.baseCurrency} = {currency.exchangeRate.toFixed(2)} {currency.code}
                </p>
              </div>
            </div>
          </div>

          {/* Converter */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="flex-1">
                <label className="text-sm text-muted-foreground mb-1 block">
                  From ({fromCurrency})
                </label>
                <Input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="text-lg font-semibold"
                />
              </div>
              <button
                className="hover:bg-secondary hover:text-secondary-foreground mt-6 h-10 w-10 flex items-center justify-center rounded"
                onClick={() => setIsReversed(!isReversed)}
              >
                <ArrowRightLeft className="w-5 h-5 text-ocean" />
              </button>
              <div className="flex-1">
                <label className="text-sm text-muted-foreground mb-1 block">
                  To ({toCurrency})
                </label>
                <div className="h-12 px-4 flex items-center bg-muted rounded-xl">
                  <span className="text-lg font-semibold">
                    {convertedAmount.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CurrencyCard;
