interface MentionDetails {
    type?: 'user' | 'channel' | 'role';
    mobile?: boolean;
}

interface Mention {
    id: string;
    detail: MentionDetails;
}

type RawMention = string | string[] | number;

export default function f(
    value: RawMention, 
    obj?: { detail?: false }
): string | string[] | undefined;
export default function f(
    value: RawMention, 
    obj: { detail: true }
): Mention | Mention[] | undefined;
