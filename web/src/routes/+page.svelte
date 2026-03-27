<script lang="ts">
  import { onMount } from "svelte";
  import { AlbumApi, Configuration, type AlbumResponseDto } from "$api";

  const api = new AlbumApi(
    new Configuration({ basePath: "http://127.0.0.1:3000" }),
  );

  let albumName = $state("");
  let albums = $state<AlbumResponseDto[]>([]); // Reactive array

  async function loadAlbums() {
    // The SDK now has 'getAllAlbums' because of our operationId!
    albums = await api.getAllAlbums();
  }

  async function handleSubmit() {
    await api.createAlbum({ createAlbumDto: { albumName } });
    albumName = ""; // Clear input
    await loadAlbums(); // Refresh list
  }

  onMount(loadAlbums);
</script>

<h1>My Albums</h1>

<input bind:value={albumName} placeholder="New Album Name" />
<button onclick={handleSubmit}>Create</button>

<ul>
  {#each albums as album}
    <li>{album.albumName} <small>({album.id})</small></li>
  {/each}
</ul>
