# selfpaynow-openpdf

Notifies Javacript clients when pdf file was opened by the consumer app

## Install

```bash
npm install selfpaynow-openpdf
npx cap sync
```

## API

<docgen-index>

* [`echo(...)`](#echo)
* [`getPendingPdfOpened()`](#getpendingpdfopened)
* [`clearPendigPfOpened()`](#clearpendigpfopened)
* [`addListener('pdfOpened', ...)`](#addlistenerpdfopened-)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### echo(...)

```typescript
echo(options: { value: string; }) => Promise<{ value: string; }>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

--------------------


### getPendingPdfOpened()

```typescript
getPendingPdfOpened() => Promise<{ pdfuri: string; }>
```

**Returns:** <code>Promise&lt;{ pdfuri: string; }&gt;</code>

--------------------


### clearPendigPfOpened()

```typescript
clearPendigPfOpened() => Promise<void>
```

--------------------


### addListener('pdfOpened', ...)

```typescript
addListener(eventName: 'pdfOpened', listenerFunc: (info: { value: string; }) => void) => Promise<PluginListenerHandle>
```

| Param              | Type                                               |
| ------------------ | -------------------------------------------------- |
| **`eventName`**    | <code>'pdfOpened'</code>                           |
| **`listenerFunc`** | <code>(info: { value: string; }) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt;</code>

--------------------


### Interfaces


#### PluginListenerHandle

| Prop         | Type                                      |
| ------------ | ----------------------------------------- |
| **`remove`** | <code>() =&gt; Promise&lt;void&gt;</code> |

</docgen-api>
