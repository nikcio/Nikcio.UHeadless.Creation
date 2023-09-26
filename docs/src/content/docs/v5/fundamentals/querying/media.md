---
title: Media Queries
description: Learn how to query media in Nikcio.UHeadless.Creation.
---

The Nikcio.UHeadless.Creation package exposes a new service called `IMediaRepository<TMedia>` this repository can be found in the `Nikcio.UHeadless.Media.Repositories` namespace. This service is what you'll use to create your Media model based on any `IPublishedContent` (The shared interface for media).

# What is `TMedia`

TMedia is the Media model you have created for your Media. The only restriction is that the model must implement the `IMedia` interface. See the `MediaDocumentModel` in the [Nikcio.UHeadless.Creation.Models.Example](https://github.com/nikcio/Nikcio.UHeadless/tree/v5/contrib/src/Nikcio.UHeadless.Creation.Models.Example) for more information.

# Methods

The service has two important methods:

## GetMedia

The `GetMedia` method gets one Media model from one IPublishedMedia model.

The first argument in the method is an action where you can fetch an IPublishedMedia from the `IPublishedMediaCache` provided by Umbraco.

### Examples

```csharp
private readonly IMediaRepository<MediaDocumentModel> MediaRepository;

ctor(IMediaRepository<MediaDocumentModel> MediaRepository)
{
    this.MediaRepository = MediaRepository
}

private void Example()
{
    var MediaDocumentModel = MediaRepository.GetMedia(x => x?.GetById(entity.Id), null, null, null);
}
```

This will get an invariant model by id with no segment or fallback property values.


```csharp
private readonly IMediaRepository<MediaDocumentModel> MediaRepository;

ctor(IMediaRepository<MediaDocumentModel> MediaRepository)
{
    this.MediaRepository = MediaRepository
}

private void Example()
{
    var MediaDocumentModel = MediaRepository.GetMedia(x =>
    {
        IPublishedMedia? publishedMedia = x?.GetById(false, id);
        if(!publishedMedia?.IsPublished(culture) ?? false)
        {
            return null;
        }
        return publishedMedia;
    }, culture, null, Fallback.ToLanguage)
}
```

In this example we get the published model by id and a culture but checks that it's acturally published for the culture we are fetching for before parsing it to the `IMediaRepository`. This makes sure that we don't get a Media model on an unpublished culture. Lastly we use the Language fallback on the properties if no vaules are found on a property.

## GetMediaList

The `GetMediaList` method gets a list Media models from a list of IPublishedMedia models but otherwise works in a similar fasion.

The first argument in the method is an action where you can fetch an IPublishedMedia from the `IPublishedMediaCache` provided by Umbraco.

### Examples

```csharp
private readonly IMediaRepository<MediaDocumentModel> MediaRepository;

ctor(IMediaRepository<MediaDocumentModel> MediaRepository)
{
    this.MediaRepository = MediaRepository
}

private void Example()
{
    var MediaDocumentModels = MediaRepository.GetMediaList(x => x?.GetAtRoot(), null, null, null);
}
```

This will get the Media at the root with no segment or fallback property values.

# Preview values

It's possible to fetch preview values by parsing the parameters to the methods found on the `IPublishedMediaCache` (This first argument in the methods).