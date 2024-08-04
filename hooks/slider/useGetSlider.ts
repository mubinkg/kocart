import { GET_SLIDER_LIST } from "@/graphql/query/slider/indes";
import { useQuery } from "@apollo/client";

export function useGetSliders({limit,offset}:{limit:number,offset:number}){
    const {data, refetch, loading} = useQuery(GET_SLIDER_LIST, {fetchPolicy: "no-cache",variables: {limit: limit, offset:offset}})

    return {
        sliders: data?.sliders || [],
        loading,
        refetch
    }
}