import { GET_BRANDS } from "@/graphql/query/brand";
import { useQuery } from "@apollo/client";

export function useGetBrand({limit,offset}: {limit: number, offset: number}){
    const {data, loading, refetch} = useQuery(GET_BRANDS, {variables: {limit: limit, offset: offset}, fetchPolicy: "no-cache"})

    return {
        brands: data?.brands || [],
        loading,
        refetch
    }
}