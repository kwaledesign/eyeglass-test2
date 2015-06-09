# Eyeglass-listfiles

Eyeglass-listfiles is an eyeglass module to list files in a directory. It exposes a function in sass that returns a sass map of the filenames. (keys are filenames without extension, values are filenames with extension)

## Install

```
npm install eyeglass-listfiles --save
```

## Usage

```sass
$files: listFiles('public/media/images');

@each $filename, $file in $files {
    .image-#{$filename} {
        background-image: url('#{$file}');
    }
}
```


## Copyright

Copyright (c) 2015 Thomas Mattheussen. See [LICENSE](https://github.com/thomasmattheussen/eyeglass-listfiles/blob/master/LICENSE) for details.