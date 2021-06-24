export async function postData(url = "", data = {}, auth = "") {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${auth}`,
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

export async function getData(url = "", auth = "") {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${auth}`,
    },
  });
  return response.json();
}

export async function updateData(url = "", forId = "", data = {}, auth = "") {
  const response = await fetch(`${url}/${forId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${auth}`,
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

export async function deleteData(url = "", forId = "", auth = "") {
  const response = await fetch(`${url}/${forId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${auth}`,
    },
  });
  return response.json();
}
