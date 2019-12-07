const { prisma } = require('./generated/prisma-client');

/*
async function main() {
    const newUser = await prisma.createUser({ name: 'Alice' });
    console.log(`Created new user: ${newUser.name} (ID: ${newUser.id})`);

    const allUsers = await prisma.users();
    console.log(allUsers);

    const user = await prisma.user({ id: newUser.id });
    console.log(`user : ${JSON.stringify(user, null, 4)}`);

    const usersCalledAlice = await prisma.users({
        where: {
            name: 'Alice',
        },
    });
    console.log(`usersCalledAlice : ${JSON.stringify(usersCalledAlice, null, 4)}`);

    const updatedUser = await prisma.updateUser({
        where: { id: newUser.id },
        data: { name: 'Bob' },
    })
    console.log(`updatedUser : ${JSON.stringify(updatedUser, null, 4)}`);
}
*/

/*
async function main() {
    const newUser = await prisma.createUser({
        name: 'Bob',
        email: 'bob@prisma.io',
        posts: {
            create: [
                {
                    title: 'Join us for GraphQL Conf in 2019',
                },
                {
                    title: 'Subscribe to GraphQL Weekly for GraphQL news',
                }
            ]
        }
    });
    console.log(`Created new user: ${newUser.name} (ID: ${newUser.id})`);

    const allUsers = await prisma.users();
    console.log(allUsers);

    const allPosts = await prisma.posts();
    console.log(allPosts);
}
*/

async function main() {
    const postsByUser = await prisma.user({ email: 'bob@prisma.io' }).posts();
    console.log(`All posts by that user: ${JSON.stringify(postsByUser)}`);
}

main().catch(e => console.error(e));