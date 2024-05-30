import { useQuery } from '@tanstack/react-query'
import { DollarSign } from 'lucide-react'

import { getMonthCanceledOrdersAmount } from '@/api/getMonthCanceledOrdersAmounth'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import { MetricCardSkeleton } from './metricCardSkeleton'

export function MonthCanceledOrdersAmountCard() {
  const { data: monthCanceledOrdersAmount } = useQuery({
    queryFn: getMonthCanceledOrdersAmount,
    queryKey: ['metrics', 'month-canceled-order-amount'],
  })

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Cancelamentos (mês)
        </CardTitle>
        <DollarSign className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        {monthCanceledOrdersAmount && (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {monthCanceledOrdersAmount.amount.toLocaleString('pt-BR')}
            </span>
            <p className="text-xs text-muted-foreground">
              {monthCanceledOrdersAmount.diffFromLastMonth < 0 && (
                <div className="flex gap-2">
                  <span className="text-emerald-500 dark:text-emerald-400">
                    +{monthCanceledOrdersAmount.diffFromLastMonth}%
                  </span>
                  <p>relação ao mês passado</p>
                </div>
              )}
              {monthCanceledOrdersAmount.diffFromLastMonth >= 0 && (
                <div className="flex gap-2">
                  <span className="text-rose-500 dark:text-rose-400">
                    -{monthCanceledOrdersAmount.diffFromLastMonth}%
                  </span>
                  <p>relação ao mês passado</p>
                </div>
              )}
            </p>
          </>
        )}
        {!monthCanceledOrdersAmount && <MetricCardSkeleton />}
      </CardContent>
    </Card>
  )
}
