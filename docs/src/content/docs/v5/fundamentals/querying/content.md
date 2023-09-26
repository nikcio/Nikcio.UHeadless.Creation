---
title: Content Queries
description: Learn how to query content in Nikcio.UHeadless.Creation.
---

The Nikcio.UHeadless.Creation package exposes a new service called `IContentRepository<TContent>` this repository can be found in the `Nikcio.UHeadless.Content.Repositories` namespace. This service is what you'll use to create your content model based on any `IPublishedContent`.

# What is `TContent`

TContent is the content model you have created for your content. The only restriction is that the model must implement the `IContent` interface. See the `ContentDocumentModel` in the [Nikcio.UHeadless.Creation.Models.Example](https://github.com/nikcio/Nikcio.UHeadless/tree/v5/contrib/src/Nikcio.UHeadless.Creation.Models.Example) for more information.

# Methods

The service has two important methods:

## GetContent

The `GetContent` method gets one content model from one IPublishedContent model.

The first argument in the method is an action where you can fetch an IPublishedContent from the `IPublishedContentCache` provided by Umbraco.

### Examples

```csharp
private readonly IContentRepository<ContentDocumentModel> contentRepository;

ctor(IContentRepository<ContentDocumentModel> contentRepository)
{
    this.contentRepository = contentRepository
}

private void Example()
{
    var contentDocumentModel = contentRepository.GetContent(x => x?.GetById(entity.Id), null, null, null);
}
```

This will get an invariant model by id with no segment or fallback property values.


```csharp
private readonly IContentRepository<ContentDocumentModel> contentRepository;

ctor(IContentRepository<ContentDocumentModel> contentRepository)
{
    this.contentRepository = contentRepository
}

private void Example()
{
    var contentDocumentModel = contentRepository.GetContent(x =>
    {
        IPublishedContent? publishedContent = x?.GetById(false, id);
        if(!publishedContent?.IsPublished(culture) ?? false)
        {
            return null;
        }
        return publishedContent;
    }, culture, null, Fallback.ToLanguage)
}
```

In this example we get the published model by id and a culture but checks that it's acturally published for the culture we are fetching for before parsing it to the `IContentRepository`. This makes sure that we don't get a content model on an unpublished culture. Lastly we use the Language fallback on the properties if no vaules are found on a property.

## GetContentList

The `GetContentList` method gets a list content models from a list of IPublishedContent models but otherwise works in a similar fasion.

The first argument in the method is an action where you can fetch an IPublishedContent from the `IPublishedContentCache` provided by Umbraco.

### Examples

```csharp
private readonly IContentRepository<ContentDocumentModel> contentRepository;

ctor(IContentRepository<ContentDocumentModel> contentRepository)
{
    this.contentRepository = contentRepository
}

private void Example()
{
    var contentDocumentModels = contentRepository.GetContentList(x => x?.GetAtRoot(), null, null, null);
}
```

This will get the content at the root with no segment or fallback property values.

# Preview values

It's possible to fetch preview values by parsing the parameters to the methods found on the `IPublishedContentCache` (This first argument in the methods).

# Routing

It's possible with the `IContentRouter<TContent, TContentRedirect>` to get content by routing which means you can also include any redirect information in your content model.

To use the content router your `TContent` model needs to implement the `IRedirectableEntity<TContentRedirect>` interface.