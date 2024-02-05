interface MemoizationProps {
  financialData: {
    incomes: number[],
    outcomes:number[],
  }
}

export const Memoization: React.FC<MemoizationProps> = ({financialData}) => {
  const totalIncomes = financialData.incomes.reduce((total, income) => {
    return total += income
  }, 0)

  const totalOutcomes = financialData.outcomes.reduce((total, outcome) => {
    return total += outcome
  })

  return (
    <div style={{padding: "2rem"}}>
      <h1>Memoization</h1>

      <h2>useMemo</h2>

      <p>{`Total de Receita: R$ ${totalIncomes}`}</p>
      <br />
      <p>{`Total de Despesas: R$ ${totalOutcomes}`}</p>
    </div>
  )
}