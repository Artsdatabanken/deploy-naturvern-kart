#!/bin/bash
DESTPATH=/home/grunnkart/
echo Making archive...
tar -cjf naturvern-kart.tar.gz -C ./build .
echo Deploying...
scp naturvern-kart.tar.gz grunnkart@nin.artsdatabanken.no:~/
ssh grunnkart@hydra tar -xjf naturvern-kart.tar.gz -C ./tilesdata
