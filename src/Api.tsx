import AxiosClient from "./services/clients/AxiosClient";

export  const handleFetch = async () => {
        const response = await AxiosClient.get("products");
    }


