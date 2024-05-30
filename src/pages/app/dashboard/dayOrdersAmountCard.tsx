import { useQuery } from '@tanstack/react-query'
import { Utensils } from 'lucide-react'

import { getDayOrdersAmount } from '@/api/getDayOrdersAmount'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function DayOrdersAmountCard() {
  const { data: dayOrdersAmount } = useQuery({
    queryFn: getDayOrdersAmount,
    queryKey: ['metrics', 'day-order-amount'],
  })

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">Pedido (dia)</CardTitle>
        <Utensils className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        {dayOrdersAmount && (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {dayOrdersAmount.amount.toLocaleString('pt-BR')}
            </span>
            <p className="text-xs text-muted-foreground">
              {dayOrdersAmount.diffFromYesterday > 0 && (
                <div className="flex gap-2">
                  <span className="text-emerald-500 dark:text-emerald-400">
                    +{dayOrdersAmount.diffFromYesterday}%
                  </span>
                  <p>em relação a ontem</p>
                </div>
              )}
              {dayOrdersAmount.diffFromYesterday <= 0 && (
                <div className="flex gap-2">
                  <span className="text-rose-500 dark:text-rose-400">
                    {dayOrdersAmount.diffFromYesterday}%
                  </span>
                  <p>em relação a ontem</p>
                </div>
              )}
            </p>
          </>
        )}
      </CardContent>
    </Card>
  )
}
