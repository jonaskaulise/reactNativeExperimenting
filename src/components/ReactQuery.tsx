import { useQuery } from 'react-query'
import { SafeAreaView, Text, View } from "react-native";

function ReactQuery() {
  const { isLoading, error, data } = useQuery('repoData', () =>
    fetch('https://api.github.com/repos/tannerlinsley/react-query').then(res =>
      res.json()
    )
  )

  if (isLoading) return <View><Text>'Loading...'</Text></View>

  if (error) return <View><Text>'An error has occurred: ' + error.message</Text></View>

  return (
    <SafeAreaView>
      <View>
        <Text>{data.name}</Text>
        <Text>{data.description}</Text>
        <Text>👀 {data.subscribers_count}</Text>
        <Text>✨ {data.stargazers_count}</Text>
        <Text>🍴 {data.forks_count}</Text>
      </View>
    </SafeAreaView>

  )
}

export default ReactQuery;
