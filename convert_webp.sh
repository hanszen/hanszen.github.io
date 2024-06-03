#!/bin/bash

## This script converts all images to webp files (smaller, faster, better for the web)
## Some browsers don't support webp, so we'll also keep the originals. The <picture> tag lets us have backups.

# We'll call this function on every image.
# First parameter: The full filename
convert_to_webp () {
  # base = the path without extension
  base="${1%.*}"
  echo "$base.webp"
  # Convert to webp using imagemagick
  magick "$1" -quality 75 "$base.webp"
}

# Make this function visible to xargs below
export -f convert_to_webp

# For every image in assets/img, call convert_to_webp
find assets/img -type f \( -iname \*.jpg -o -iname \*.jpeg -o -iname \*.png -o -iname \*.heic \) -print0 | xargs -0 -I {} bash -c 'convert_to_webp "$@"' _ {}