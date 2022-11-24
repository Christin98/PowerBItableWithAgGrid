

export const colMapping = (value1: any[], value2: any[]) => {
  let rowData: any = [];
  for (let i = 0; i < value1.length; i++) {
    rowData.push({
      name: value1[i],
      values: value2[i]
    })
  }
  return rowData;
}

export const deStructured = (categorical: any[]) => {
  const valuesLength = categorical[0].values.length;
  const rowData = [];
  for (let valueIndex = 0; valueIndex < valuesLength; valueIndex++) {
    const obj = {};
    for (let cateogryIndex = 0; cateogryIndex < categorical.length; cateogryIndex++) {
      const category = categorical[cateogryIndex];
      const cateogyName = category.name;
      obj[cateogyName] = category.values[valueIndex]
    }
    rowData.push(obj)
  }
  return rowData
}

export const Colvalues = (value: any) => {
  const mainData = [];
  for (let index = 0; index < value.length; index++) {
    mainData.push({
      field: value[index]
    })
  }
  return mainData;
}