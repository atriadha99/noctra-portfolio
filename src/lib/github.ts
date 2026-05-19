export async function getGithubRepos() {
  const res = await fetch(
    'https://api.github.com/users/atriadha99/repos',
    {
      next: { revalidate: 3600 }
    }
  )

  if (!res.ok) {
    throw new Error('Failed to fetch repos')
  }

  return res.json()
}
