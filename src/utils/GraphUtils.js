class GraphUtils {
  static limitGraphOptions = (graphData, numberLimit) => {
    let newObject = {"Other": 0}
    let valuesArray = Object.values(graphData).sort((a,b) => b - a)

    for (let i=0; i < valuesArray.length; i++) {
      if (i <= numberLimit) {
        let key = Object.keys(graphData).find(key => graphData[key] === valuesArray[i])
        
        newObject[key] = valuesArray[i]
      } else {
        newObject["Other"] += valuesArray[i]
      }
    }
    
    return newObject
  }
}

export { GraphUtils }