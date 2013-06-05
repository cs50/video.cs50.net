# Installation

*Assumes [CS50 Appliance 17](https://manual.cs50.net/CS50_Appliance_17).*

Inside appliance as `root`:

    sudo su -
    yum install php-pecl-yaml
    gem install sass
    exit

Inside appliance as `jharvard`:

    cd ~/vhosts
    git clone git@github.com:cs50/tv50.git cs50.tv
    cd cs50.tv
    ./bin/chmod

Outside appliance (assuming Mac):

    sudo su -
    echo "w.x.y.z cs50.tv" >> /etc/hosts # where w.x.y.z is appliance's IP address
    exit

# Troubleshooting

## Fixing Permissions

    chmod 700 ~/vhosts/cs50.tv/bin/chmod
    ~/vhosts/cs50.tv/bin/chmod

# Deployment

*requires that your SSH key be added to `build.x.cs50.net`*

    git remote add production ssh://ec2-user@build.x.cs50.net/home/ec2-user/var/tv50.git # once
    git push production master # thereafter
