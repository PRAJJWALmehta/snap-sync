# AlbumApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createAlbum**](AlbumApi.md#createalbum) | **POST** /albums | Create a new album |
| [**getAllAlbums**](AlbumApi.md#getallalbums) | **GET** /albums | Get all albums |



## createAlbum

> AlbumResponseDto createAlbum(createAlbumDto)

Create a new album

### Example

```ts
import {
  Configuration,
  AlbumApi,
} from '';
import type { CreateAlbumRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AlbumApi();

  const body = {
    // CreateAlbumDto
    createAlbumDto: ...,
  } satisfies CreateAlbumRequest;

  try {
    const data = await api.createAlbum(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **createAlbumDto** | [CreateAlbumDto](CreateAlbumDto.md) |  | |

### Return type

[**AlbumResponseDto**](AlbumResponseDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAllAlbums

> Array&lt;AlbumResponseDto&gt; getAllAlbums()

Get all albums

### Example

```ts
import {
  Configuration,
  AlbumApi,
} from '';
import type { GetAllAlbumsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AlbumApi();

  try {
    const data = await api.getAllAlbums();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;AlbumResponseDto&gt;**](AlbumResponseDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

