export function formatCurrency(amount: number) {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS"
  }).format(amount)
}

export function formatDate(date: string): string {
  const dateObj = new Date(date)
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    day: "numeric",
    year: "numeric",
    month: "long"
  }

  return new Intl.DateTimeFormat("es-ES", options).format(dateObj)
}