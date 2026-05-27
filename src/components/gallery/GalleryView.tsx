"use client";

import { Column, Heading, Text, Media, MasonryGrid } from "@once-ui-system/core";
import { gallery } from "@/resources";

export default function GalleryView() {
  return (
    <Column fillWidth gap="xl" paddingTop="48">
      <Column fillWidth gap="8">
        <Heading as="h1" variant="display-strong-s">
          {gallery.title}
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-weak">
          {gallery.description}
        </Text>
      </Column>
      <MasonryGrid columns={2} s={{ columns: 1 }}>
        {gallery.images.map((image, index) => (
          <Media
            enlarge
            priority={index < 10}
            sizes="(max-width: 560px) 100vw, 50vw"
            key={index}
            radius="m"
            aspectRatio={image.orientation === "horizontal" ? "16 / 9" : "3 / 4"}
            src={image.src}
            alt={image.alt}
          />
        ))}
      </MasonryGrid>
    </Column>
  );
}
