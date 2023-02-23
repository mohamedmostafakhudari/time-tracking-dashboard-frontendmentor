export async function getData() {
  const response = await fetch("./data.json");
  return response.json();
}
