export class PostModel {
  id: number;
  slug: string;
  title: string;
  content: string;
  excerpt: string;
  type: string;
  status: string;
  format: string;
  date: string;
  categories: CategoriesModel[];
  tags: TagsModel[];
  featured_media: FeaturedMediaModel[];

  constructor() {
    this.id = 0;
    this.slug = "";
    this.title = "";
    this.content = "";
    this.excerpt = "";
    this.type = "";
    this.status = "";
    this.format = "";
    this.date = "";
    this.categories = [];
    this.tags = [];
    this.featured_media = [];
  }
}

export class CategoriesModel {
  count: number;
  description: string;
  id: number;
  link: string;
  name: string;
  parent: number;
  slug: string;
  taxonomy: string;

  constructor() {
    this.count = 0;
    this.description = "";
    this.id = 0;
    this.link = "";
    this.name = "";
    this.parent = 0;
    this.slug = "";
    this.taxonomy = "";
  }
}

export class TagsModel {
  count: number;
  description: string;
  id: number;
  link: string;
  name: string;
  meta: any;
  slug: string;
  taxonomy: string;

  constructor() {
    this.count = 0;
    this.description = "";
    this.id = 0;
    this.link = "";
    this.name = "";
    this.meta = [];
    this.slug = "";
    this.taxonomy = "";
  }
}

export class FeaturedMediaModel {
  caption: string;
  description: string;
  detailList: DetailListFeaturedMediaModel[];
  id: number;
  source: string;
  title: string;
  type: string;

  constructor() {
    this.caption = "";
    this.description = "";
    this.id = 0;
    this.detailList = [];
    this.source = "";
    this.title = "";
    this.type = "";
  }
}

export class DetailListFeaturedMediaModel {
  full: FeaturedMediaDetailModel[];
  large: FeaturedMediaDetailModel[];
  medium: FeaturedMediaDetailModel[];
  medium_large: FeaturedMediaDetailModel[];
  thumbnail: FeaturedMediaDetailModel[];

  constructor() {
    this.full = [];
    this.large = [];
    this.medium = [];
    this.medium_large = [];
    this.thumbnail = [];
  }
}

export class FeaturedMediaDetailModel {
  file: string;
  height: string;
  mime_type: string;
  source_url: string;
  width: string;

  constructor() {
    this.file = "";
    this.height = "";
    this.mime_type = "";
    this.source_url = "";
    this.width = "";
  }
}
