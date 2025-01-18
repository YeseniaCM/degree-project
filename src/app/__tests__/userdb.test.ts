import { getAllUsers, createUser, getUserById, updateUserById, deleteUserById, getUserByEmail } from "@/lib/userdb";
import { GET } from "@/app/api/users/route";

jest.mock("@/lib/userdb", () => ({
  createUser: jest.fn().mockResolvedValue({ insertedId: "mock-id" })
}));


describe("GET", () => {

  afterEach(() => {
    jest.clearAllMocks(); // Rensa mocks efter varje test
  });

  it("should get all users", async () => {
    const users = await getAllUsers();
    expect(users).toHaveLength(1);
    expect(users).toHaveProperty("email", "test@example.com");
  });

});

describe('Create User function', () => {
  it('should mock createUser function', async () => {
    const result = await createUser({
        email: 'test@example.com',
        username: "",
        password: "",
        fullName: "",
        createdAt: "",
        lastLogin: ""
    });
    expect(result.insertedId).toBe('mock-id');
  });
});