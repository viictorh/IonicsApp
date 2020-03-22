export const execPost = (url, body, contentType) => {
  if (!contentType) {
    contentType = "application/json";
  }

  return fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": contentType
    },
    body: JSON.stringify(body)
  });
};

export const handleResult = fetchResult => {
  if (!fetchResult.ok) {
    console.log(fetchResult.statusText);
  }
  return fetchResult.json();
};

export const handleError = fetchError => {
  console.log("error", fetchError);
  return null;
};
