export const formatDate = (dateString: string): string => {
  const event = new Date(dateString)
  return event.toDateString().slice(0, -4)
}
