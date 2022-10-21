import { useSession } from "next-auth/react";
import Context from "../../components/Context";
function Show({ result, recommended }) {
  const { data: session } = useSession();

  return (
    <Context result={result} recommended={recommended} session={session} />
  );
}

export default Show;

export async function getServerSideProps(context) {
  const { id } = context.query;

  const [requestRes, recommendedRes] = await Promise.all([
    fetch(
      `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.API_KEY}&language=en-US&append_to_response=videos`
    ),

    fetch(`https://api.themoviedb.org/3/tv/${id}/similar?api_key=${process.env.API_KEY}&language=en-US&page=1
     `),
  ]);
  const [request, recommended] = await Promise.all([
    requestRes.json(),
    recommendedRes.json(),
  ]);
  return {
    props: {
      result: request,
      recommended,
    },
  };
}
