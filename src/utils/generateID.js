export const generateID = (database = []) => {
  let id = Math.random().toString(36).substr(2,9) + Math.random().toString(36).substr(2,9)
  let idInUse;

  idInUse = database.some(items => items.id === id)

  return idInUse ? generateID(database) : id
}