export interface AddonInfoResponse {
  slug: string;
  name: {
    [key: string]: string;
  };
  // eslint-disable-next-line @typescript-eslint/naming-convention
  current_version: {
    version: string;
    file: {
      id: string;
    };
  };
  // eslint-disable-next-line @typescript-eslint/naming-convention
  default_locale: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  review_url: string;
  guid: string;
}

export interface AddonVersion {
  map(
    arg0: (version: any) => any
  ): readonly string[] | Thenable<readonly string[]>;
  id: string;
  version: string;
  file: {
    id: string;
  };
}
