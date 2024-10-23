const fetchData = async (url, data) => {
  let response = null;
  let loading = true;

  try {
    const result = await fetch(url, data);
    if (!result.ok) {
      throw new Error('Network response was not ok');
    }
    response = { status: result.status };
  } catch (error) {
    response = { status: 500 };
  } finally {
    loading = false;
  }

  return { response, loading };
}

export default fetchData;