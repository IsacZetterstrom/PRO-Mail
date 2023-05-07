async function fetchJson(adress, method, data) {
  const options = {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  return await fetch(adress, options);
}

function fetchFormData(form) {
  const formData = new FormData(form);

  return Object.fromEntries(formData);
}

export { fetchFormData, fetchJson };
