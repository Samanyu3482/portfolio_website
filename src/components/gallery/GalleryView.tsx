"use client";

import { Column, Heading, Text, Media, MasonryGrid } from "@once-ui-system/core";
import { gallery } from "@/resources";

export default function GalleryView() {
  return (
    <Column fillWidth gap="xl" paddingTop="48">
      <Column fillWidth gap="12" horizontal="center" align="center" style={{ textAlign: "center" }}>
        <Heading as="h1" variant="display-strong-m">
          {gallery.title}
        </Heading>
        <Column gap="4" horizontal="center" align="center">
          <Text variant="body-default-l" onBackground="neutral-weak">
            {gallery.description}
          </Text>
          <Text variant="body-default-m" onBackground="brand-weak" style={{ fontStyle: "italic" }}>
            A huge thank you to all my teammates for making these moments unforgettable. 🚀
          </Text>
        </Column>
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
