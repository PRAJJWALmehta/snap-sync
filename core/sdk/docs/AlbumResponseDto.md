
# AlbumResponseDto


## Properties

Name | Type
------------ | -------------
`id` | string
`albumName` | string
`createdAt` | string

## Example

```typescript
import type { AlbumResponseDto } from ''

// TODO: Update the object below with actual values
const example = {
  "id": uuid-123-456,
  "albumName": Summer Vacation,
  "createdAt": 2026-03-28T00:00:00Z,
} satisfies AlbumResponseDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AlbumResponseDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


