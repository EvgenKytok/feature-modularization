export async function fetchImages(page, count = 4) {
    const response = await fetch(
        `https://picsum.photos/v2/list?page=${page}&limit=${count}`
    );
    return response.json();
}
