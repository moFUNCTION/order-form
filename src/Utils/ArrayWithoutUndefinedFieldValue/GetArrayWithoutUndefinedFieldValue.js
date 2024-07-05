export function GetArrayWithoutUndefinedValue(arr) {
  return arr.map((obj) => cleanObject(obj));
}

function cleanObject(obj) {
  let cleanObj = {};

  for (let key in obj) {
    if (obj[key] !== undefined) {
      if (typeof obj[key] === "object" && obj[key] !== null) {
        cleanObj[key] = Array.isArray(obj[key])
          ? obj[key].map((item) =>
              typeof item === "object" && item !== null
                ? cleanObject(item)
                : item
            )
          : cleanObject(obj[key]);
      } else {
        cleanObj[key] = obj[key];
      }
    }
  }

  return cleanObj;
}
