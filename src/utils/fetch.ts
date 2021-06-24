export async function postData(url = "", data = {}, auth = "") {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${auth}`,
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

export async function getData(url = "", auth = "") {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${auth}`,
    },
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

export async function updateData(url = "", forId: "", data = {}, auth = "") {
  // Default options are marked with *
  const response = await fetch(`${url}/${forId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${auth}`,
    },
    body: JSON.stringify(data),
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

export async function deleteData(url = "", forId: "", auth = "") {
  // Default options are marked with *
  const response = await fetch(`${url}/${forId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${auth}`,
    },
  });
  return response.json(); // parses JSON response into native JavaScript objects
}
