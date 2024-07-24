const API_URL = import.meta.env.VITE_API_URL;

export async function fetchWithTimeout(url, options = {}, timeout = 5000) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  const response = await fetch(url, {
    ...options,
    signal: controller.signal
  });

  clearTimeout(id);

  return response;
}

export async function get(endpoint) {
  const response = await fetchWithTimeout(`${API_URL}${endpoint}`);
  return response.json();
}

export async function post(endpoint, data) {
  const response = await fetchWithTimeout(`${API_URL}${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response.json();
}
