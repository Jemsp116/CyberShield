import qs from "qs";
import { getStrapiURL } from "@/lib/utils";
import axios from "axios";

const baseUrl = getStrapiURL();

async function fetchData(url) {
    const authToken = null; // we will implement this later getAuthToken() later
    const headers = {
        "Content-Type": "application/json",
        ...(authToken ? { Authorization: `Bearer ${authToken}` } : {}),
    };

    try {
        const response = await axios.get(url, { headers });
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error; // or return null;
    }
}

export async function getBlogsData(id) {
    const url = new URL((id) ? `/api/blogs/${id}` : "/api/blogs", baseUrl);

    url.search = qs.stringify({
        populate: {
            category: {
                fields: ["category", "slug"]
            },
            image: {
                fields: ["url"],
            },
            populate: true,
        }
    });
    console.log(url.href);
    return await fetchData(url.href);
}

export async function getCategoriesData(id) {
    const url = new URL((id) ? `/api/categories/${id}` : "/api/categories", baseUrl);

    url.search = qs.stringify({
        populate: {
            populate: true,
        }
    });
    console.log(url.href);
    return await fetchData(url.href);
}