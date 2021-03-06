type UserResponse = {
  user: {
    id: string;
    profile: { image_24: string; display_name: string };
    is_admin: boolean;
    is_bot: boolean;
  };
};

export function isValidUserResponse(input: unknown): input is UserResponse {
  return (
    typeof input === 'object' &&
    input !== null &&
    typeof (input as any).user === 'object' &&
    typeof (input as any).user.id === 'string' &&
    typeof (input as any).user.is_admin === 'boolean' &&
    typeof (input as any).user.is_bot === 'boolean' &&
    typeof (input as any).user.profile === 'object' &&
    typeof (input as any).user.profile.image_24 === 'string'
  );
}
